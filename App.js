import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Style from './src/style/style';
import InputButton from './src/inputbutton';
// Define the input buttons that will be displayed in the calculator.
const inputButtons = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, 'CLR', '=', '+']
];
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      previousInputValue: 0,
      inputValue: 0,
      inputData: null,
      selectedSymbol: null
    }
  }
  render() {
    return (
      <View style={Style.rootContainer}>
       <View style={Style.displayContainer}>
          <Text style={Style.displayInputData}>{this.state.inputData}</Text>
        </View>
        <View style={Style.displayContainer}>
          <Text style={Style.displayText}>{this.state.inputValue}</Text>
        </View>
        <View style={Style.inputContainer}>
          {this._renderInputButtons()}
        </View>
      </View>
    )
  }

  /**
  * For each row in `inputButtons`, create a row View and add create an InputButton for each input in the row.
  */
  _renderInputButtons() {
    let views = [];

    for (var r = 0; r < inputButtons.length; r++) {
      let row = inputButtons[r];
      let inputRow = [];
      for (var i = 0; i < row.length; i++) {
        let input = row[i];
        inputRow.push(
          <InputButton
            value={input}
            highlight={this.state.selectedSymbol === input}
            onPress={this._onInputButtonPressed.bind(this, input)}
            key={r + "-" + i} />
        );
      }

      views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
    }

    return views;
  }
  _handleNumberInput(num) {
    let inputValue = (this.state.inputValue * 10) + num;

    this.setState({
      inputValue: inputValue
    })
  }
  _onInputButtonPressed(input) {
    switch (typeof input) {
      case 'number':
        return this._handleNumberInput(input)
      case 'string':
        return this._handleOperatorInput(input)
    }
  }

  _handleOperatorInput(str) {

    switch (str) {
      case '/':
      case '*':
      case '+':
      case '-':
        this.setState({
          selectedSymbol: str,
          previousInputValue: this.state.inputValue,
          inputValue: 0,
          inputData:this.state.inputValue+str
        });
        break;
        case 'CLR':
        this.setState({
          selectedSymbol: null,
          previousInputValue: 0,
          inputValue: 0,
          inputData:null
        });
        break;
      case '=':
        let symbol = this.state.selectedSymbol,
          inputValue = this.state.inputValue,
          previousInputValue = this.state.previousInputValue;

        if (!symbol) {
          return;
        }
        var result;
        switch (symbol) {
          case '/':
            result = previousInputValue / inputValue;
            break;
          case '*':
            result = previousInputValue * inputValue;
            break;
          case '+':
            result = previousInputValue + inputValue;
            break;
          case '-':
            result = previousInputValue - inputValue;
            break;
            
        }
        this.setState({
        //  previousInputValue: 0,
          inputValue: result,
          inputData:previousInputValue+symbol+this.state.inputValue
          //selectedSymbol: null
        });
        break;

    }
  }
}