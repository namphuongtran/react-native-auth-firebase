import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    const { viewStyle, textStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 2
        },
        height: 60,
        position: 'relative',
        elevation: 2
    },

    textStyle: {
        fontSize: 20
    }
};

export { Header };
