import React, {Component} from 'react';
import {Text, View} from 'react-native'


export default class AlbumList extends Component {

    componentWillMount() {
        console.log('hello from console')
    }

    render() {
        return (
            <View>
                <Text>Albums List!!!</Text>
            </View>
        );
    }
}