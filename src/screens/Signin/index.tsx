import React from "react";
import { 
    View, 
    Text,
    Image,
    StatusBar
} from "react-native";
import { styles } from "./style";
import illustrationImg from '../../assets/illustration.png';

const Signin = () =>{
    return(
        <View style={styles.container}>
            <StatusBar barStyle="light-content" 
            backgroundColor="transparent"
            translucent
            />
           <Image
            source={illustrationImg}
            style={styles.image}
            resizeMode="stretch"
           />
           <View style={styles.content}>
            <Text style={styles.title}>
                Organize {`\n`}
                suas jogatinas {`\n`}
                facilmente 
            </Text>
            <Text style={styles.subtitle}>
                Crie grupos para jogar seus games {`\n`}
                favoritos com seus amigos
            </Text>
           </View>

        </View>
    )
}

export default Signin;