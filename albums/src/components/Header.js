import React from 'react'
import {Text, View} from 'react-native'

const Header = (props) => {
    const {textStyle, viewStyle} = styles
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height:10},
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 40
    }
}

// Make the component available to other areas of the application
export default Header