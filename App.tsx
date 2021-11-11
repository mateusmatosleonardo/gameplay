import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const App = () =>{
    return(
        <View style={styles.container}>
            <StatusBar />
            <Text>New Project</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})

export default App;