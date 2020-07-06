import React from 'react';
import { StyleSheet, View} from "react-native";

import {Entypo} from "@expo/vector-icons"

import {gs} from "../../../styles"

// image

const Play=(props)=>{
    return (
            <View style={styles.Player}>
                <Entypo name="controller-play" size={30} style={{marginLeft:5}} color="#000"/>
            </View>
    );
}

export default Play;

const styles = StyleSheet.create({
    Player:{
        position:"absolute",
        width:56,
        height:56,
        top:323,
        left:365,
        backgroundColor:"#FFF",
        ...gs.center,
        borderRadius:56/2,
        zIndex:10
    },
 });