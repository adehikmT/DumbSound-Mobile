import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { gs } from "../../../styles";

import { Feather ,AntDesign} from "@expo/vector-icons";
// image

const Start = (props) => {
  return (
    <View style={styles.Container}>
      <View style={styles.star}>
        <Text style={styles.singer}>
          <Feather name="type" size={19} color="#FFF" /> Gendre : Pop
          {"                  "}
         Reting : <AntDesign name="star" size={19} color="#FFF" />
         <AntDesign name="star" size={19} color="#FFF" />
         <AntDesign name="star" size={19} color="#FFF" />
         <AntDesign name="star" size={19} color="#FFF" />
         <AntDesign name="staro" size={19} color="#FFF" />
        </Text>
      </View>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  Container: {
    ...gs.sectionContainer,
    marginBottom: -30,
    // marginTop:-30
  },
  star: {
    marginTop: -20,
  },
  singer: {
    color: "#FFF",
    fontWeight: "600",
    marginBottom:-9
  },
});
