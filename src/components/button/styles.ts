import { StyleSheet } from "react-native";
import { colors, fontFamily} from "@/styles/theme"; 

export const s = StyleSheet.create({
    container:{
        flexDirection:"row", 
        justifyContent:"center", 
        alignItems:"center", 
        gap: 14, 
        maxHeight:56, 
        height:56, 
        borderRadius:10, 
        backgroundColor: colors.green.base, 
    }, 
    title:{
        color: colors.gray[100], 
        fontFamily: fontFamily.semiBold, 
        fontSize:16
    }
});