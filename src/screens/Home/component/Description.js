import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { Feather } from "@expo/vector-icons";

import PlayList from "./PlayList"

import { gs } from "../../../styles";

// image

const Data = {
  title: "Circel",
  singer: "Post Maolne",
  year: 2020,
};

const Description = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <Text style={gs.sectionTitle}>
        Play List <Feather name="list" size={20} color="#FFF" />
      </Text>
      <PlayList navigation={navigation}/>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  Container: {
    ...gs.sectionContainer,
  },
  singer: {
    color: "#FFF",
    fontWeight: "600",
    marginTop: 4,
  },
});
