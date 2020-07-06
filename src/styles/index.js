import {StyleSheet} from "react-native"

export const colors={
    bgDark:"#000",
    bgLight:"#FFF"
}

export const gs=StyleSheet.create({
    sectionTitle:{
        paddingVertical:-5,
        paddingHorizontal:8,
        marginBottom:8,
        color:colors.bgLight,
        fontWeight:"600",
        fontSize:18
    },
    drivider:{
        borderBottomColor:"#444",
        borderBottomWidth:1,
        marginVertical:24
    },
    title:{
        color:colors.bgLight,
        fontSize:30
    },
    sectionContainer:{
        paddingVertical:24,
        paddingHorizontal:32,
        marginBottom:8,
        backgroundColor:colors.bgDark
    },
    rowCenter:{
        flexDirection:"row",
        alignItems:"center"
    },
    rowBeetween:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    center:{
        alignItems:"center",
        justifyContent:"center"
    }
})