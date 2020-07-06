import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Constants from "expo-constants";

import { AntDesign } from "@expo/vector-icons";

import { gs } from "../../../styles";

// image

const PlayList = (props) => {
  return (
    <View style={styles.Container}>
      <View style={styles.list}>
        <Text style={styles.title}>
          <AntDesign name="play" size={16} color="#FFF" /> Circle
        </Text>
        <View style={gs.drivider} />
      </View>
      <View style={styles.list}>
        <Text style={styles.title}>
          <AntDesign name="play" size={16} color="#FFF" /> Love You
        </Text>
        <View style={gs.drivider} />
      </View>
      <View style={styles.list}>
        <Text style={styles.title}>
          <AntDesign name="play" size={16} color="#FFF" /> Love We
        </Text>
        <View style={gs.drivider} />
      </View>
      <View style={styles.list}>
        <Text style={styles.title}>
          <AntDesign name="play" size={16} color="#FFF" /> Hate You
        </Text>
        <View style={gs.drivider} />
      </View>
      <View style={styles.list}>
        <Text style={styles.title}>
          <AntDesign name="play" size={16} color="#FFF" /> Hate me
        </Text>
        <View style={gs.drivider} />
      </View>
      <View style={styles.list}>
        <Text style={styles.title}>
          <AntDesign name="play" size={16} color="#FFF" /> Love me
        </Text>
        <View style={gs.drivider} />
      </View>
      <View style={styles.list}>
        <Text style={styles.title}>
          <AntDesign name="play" size={16} color="#FFF" /> Love me
        </Text>
        <View style={gs.drivider} />
      </View>
    </View>
  );
};

export default PlayList;

const styles = StyleSheet.create({
  Container: {
    marginTop: 8,
    marginBottom: 20,
  },
  title: {
    paddingLeft: 20,
    color: "#999",
    fontSize: 17,
    marginBottom: -8,
  },
  list: {
    marginTop: -10,
  },
});
