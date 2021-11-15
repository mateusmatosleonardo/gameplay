import React from "react";
import { styles } from "./style";
import { 
    View,
    Text,
    Image,
    TouchableOpacity
    } from "react-native";
import DiscordImg from '../../assets/discord.png';

const ButtonIcon = () =>{
    return(
       <TouchableOpacity style={styles.container}>
           <View style={styles.iconWrapper}>
                <Image
                    source={DiscordImg}
                    style={styles.icon}
                />
           </View>
           <Text style={styles.title}>
                Entrar com Discord
           </Text>
       </TouchableOpacity>
    )
}

export default ButtonIcon;