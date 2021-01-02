
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
} from 'react-native';
import { withNavigation } from "react-navigation"

const DetailsScreen = (props) => {

    const { navigation } = props;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>this is a Details screen </Text>

            <Button
                title="Go to Details again.."
                onPress={() => navigation.push("Details")}
            />

            <Button
                title="Go to home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
            <Button
                title="Go to First screen"
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}


export default withNavigation(DetailsScreen);

