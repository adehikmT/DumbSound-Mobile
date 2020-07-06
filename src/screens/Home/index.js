import React from "react";
import { StyleSheet, View,ScrollView } from "react-native";
import Header from "./component/Header";
import Play from "./component/Play";
import Descrition from "./component/Description";


const Index = ({ navigation }) => {
  return (
    <ScrollView style={styles.bgDark}>
      <Header navigation={navigation} />
      <Play />
      <Descrition navigation={navigation} />
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  bgDark: {
    backgroundColor: "#000",
    flex: 1,
  },
});
