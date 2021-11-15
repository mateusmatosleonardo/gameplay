import React from "react";
import { styles } from "./style";
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    TouchableOpacityProps
    } from "react-native";
import DiscordImg from '../../assets/discord.png';

type ButtonIconProps = TouchableOpacityProps & {
    title?: string;
}

const ButtonIcon = ({title, ...rest}: ButtonIconProps) =>{
    return(
       <TouchableOpacity 
       style={styles.container}
       {...rest}
       >
           <View style={styles.iconWrapper}>
                <Image
                    source={DiscordImg}
                    style={styles.icon}
                />
           </View>
           <Text style={styles.title}>
                {title}
           </Text>
       </TouchableOpacity>
    )
}

export default ButtonIcon;