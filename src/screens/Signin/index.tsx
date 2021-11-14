import React from "react";
import { 
    View, 
    Image 
} from "react-native";
import { styles } from "./style";
import illustrationImg from '../../assets/illustration.png';

const Signin = () =>{
    return(
        <View style={styles.container}>
           <Image
            source={illustrationImg}
            style={styles.image}
           />

           <View style={styles.content}>

           </View>

        </View>
    )
}

export default Signin;