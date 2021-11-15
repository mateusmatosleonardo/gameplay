import React from "react";
import { 
    View, 
    Text,
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