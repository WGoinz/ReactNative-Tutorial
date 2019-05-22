import React, {Component} from 'react';
import {Text, View} from 'react-native'
import Card from "./Card";
import CardSection from "./CardSection";


const AlbumDetail = (props) => {
    const {album} = props
    const {title, artist} = album
    return (
        <Card>
            <CardSection>
                <View></View>
                <View style={styles.headerContentStyle}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
        </Card>
    )
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
}

export default AlbumDetail;