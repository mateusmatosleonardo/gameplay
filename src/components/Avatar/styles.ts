import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: 52,
        height: 52,
        borderRadius: 8,
        backgroundColor: theme.colors.secondary50, //mudar a cor depois
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 22
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 6
    }
})  