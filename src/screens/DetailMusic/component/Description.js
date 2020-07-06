import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { Feather } from "@expo/vector-icons";

import Star from "./Start"

import PlayList from "./PlayList"

import { gs } from "../../../styles";

// image

const Data = {
  title: "Circle",
  singer: "Post Maolne",
  year: 2020,
};

const Description = (props) => {
  return (
    <View style={styles.Container}>
      <Text style={gs.title}>{Data.title}</Text>
      <Text style={styles.singer}>
        {Data.singer} - {Data.year}
      </Text>
      <View style={gs.drivider} />
      <Star/>
      <View style={gs.drivider} />
      <Text style={gs.sectionTitle}>
        Play List {Data.singer} <Feather name="list" size={20} color="#FFF" />
      </Text>
      <PlayList/>
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
