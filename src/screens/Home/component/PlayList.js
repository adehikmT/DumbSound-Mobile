import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { gs } from "../../../styles";

// image

const PlayList = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <View style={styles.list}>
        <Text
          style={styles.title}
          onPress={() => {
            navigation.navigate("Music");
          }}
        >
          <AntDesign name="play" size={16} color="#FFF" /> Post Malone
        </Text>
        <View style={gs.drivider} />
      </View>
      <View style={styles.list}>
        <Text style={styles.title}>
          <AntDesign name="play" size={16} color="#FFF" /> Rich Brain
        </Text>
        <View style={gs.drivider} />
      </View>
      <View style={styles.list}>
        <Text style={styles.title}>
          <AntDesign name="play" size={16} color="#FFF" /> Bobmarley
        </Text>
        <View style={gs.drivider} />
      </View>
      <View style={styles.list}>
        <Text style={styles.title}>
          <AntDesign name="play" size={16} color="#FFF" /> Via Valent
        </Text>
        <View style={gs.drivider} />
      </View>
      <View style={styles.list}>
        <Text style={styles.title}>
          <AntDesign name="play" size={16} color="#FFF" /> Tamy Aulia
        </Text>
        <View style={gs.drivider} />
      </View>
      <View style={styles.list}>
        <Text style={styles.title}>
          <AntDesign name="play" size={16} color="#FFF" /> Dark metal
        </Text>
        <View style={gs.drivider} />
      </View>
      <View style={styles.list}>
        <Text style={styles.title}>
          <AntDesign name="play" size={16} color="#FFF" /> White Love
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
