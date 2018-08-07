import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },

    displayContainer: {
        flex: 2,
        backgroundColor: 'white',
        justifyContent: 'center'
    },

    displayText: {
        color: 'black',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },
    displayInputData: {
        color: 'gray',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },
    inputContainer: {
        flex: 8,
        backgroundColor: 'white'
    },
    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: 'black'
    },

    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    }, 
    
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    }, inputButtonHighlighted: {
        backgroundColor: '#193441'
    }
});

export default Style;