import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";

type Props = {
    urlImage: string;
}

const Avatar = ({urlImage}: Props) =>{
    return(
        <View style={styles.container}>
            <Image
                source={{uri: urlImage}}
                style={styles.avatar}
            />
        </View>
    )
}

export default Avatar;