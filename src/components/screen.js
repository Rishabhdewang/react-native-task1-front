import Home from "./home";
import Header from "./header";
import Footer from "./footer";
import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeStack from "../routes/HomeStack";
import { NavigationContainer } from '@react-navigation/native';

const Screen = () => {
    return (
        // <NavigationContainer>
        <View style={styles.container}>
            {/* <Header style={{ flex: 1 }} /> */}
            {/* <HomeStack style={{ flex: 6 }} /> */}

            {/* <Footer style={{ flex: 1 }} /> */}
            <HomeStack style={{ flex: 1 }} />
        </View>
        /* </NavigationContainer> */
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


export default Screen;