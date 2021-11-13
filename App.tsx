import React from "react";
import { View, StatusBar } from "react-native";
import Signin from "./src/screens/Signin";

const App = () =>{
    return(
        <View>
            <StatusBar />
            <Signin/>
        </View>
    )
}



export default App;