import React, {Component} from 'react'
import propTypes from 'prop-types'
import { TouchableOpacity, Text, StyleSheet} from 'react-native'

class myButton extends Component {
    render() {
        const { text,onPress, newColor} = this.props
        return (
        <TouchableOpacity style={styles.buttonStyle} onPress={() => onPress()}>
			<Text style={[  styles.textStyle,{color: newColor}]}>{text}</Text>
		</TouchableOpacity>
        )
    }
}

myButton.propTypes = {
    text: propTypes.string.isRequired,
    onPress: propTypes.func.isRequired,
    newColor: propTypes.string
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 14,
        textAlign: 'center',
        color: '#f8ad85'
    },
    buttonStyle: {
        minWidth: 85,
        minHeight: 44,
        maxWidth: 85,
        maxHeight: 44,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center'
    }
})


export default myButton;