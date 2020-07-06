import React,{useState} from "react";
import { StyleSheet, View, Image } from "react-native";

import { AntDesign, Entypo } from "@expo/vector-icons";

import { gs } from "../../../styles";

// image
import Jumbo from "../../../assets/images/jumbotron.png";

const Header = ({navigation}) => {
  return (
    <View>
      <Image source={Jumbo} style={{ width: "100%", height: 350 }} />
      <View style={styles.topButtons}>
        <AntDesign
          name="back"
          size={24}
          color="#FFF"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
        <View style={gs.rowCenter}>
          <Entypo
            name="dots-three-vertical"
            size={24}
            color="#FFF"
            style={styles.topButtonRight}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  topButtonRight: {
    marginLeft: 10,
  },
  topButtons: {
    ...gs.rowBeetween,
    position: "absolute",
    top: 14,
    left: 30,
    right: 30,
  },
});
