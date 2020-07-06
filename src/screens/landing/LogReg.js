import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import Logo from "../../assets/images/logo.png";
import DS from "../../assets/images/dumbsound.png";

const MusicScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", flex: 3, alignItems: "center" }}>
        <Image style={styles.logo} source={Logo} resizeMode="contain" />
      </View>
      <View style={{ width: "100%", flex: 3, alignItems: "center" }}>
        <Image source={DS} style={styles.logoDumb} resizeMode="contain" />
      </View>
      <View
        style={{
          width: "100%",
          flex: 1,
          marginTop: -100,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "600" }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
          flex: 1,
          marginTop: -100,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.buttonReg}
          onPress={() => {
            navigation.navigate("Regis");
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "600" }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MusicScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: { width: 100, height: 100, marginTop: 200 },
  logoDumb: { width: 150, height: 150, marginTop: -90 },
  logoText: {
    fontWeight: "100",
    fontSize: 32,
  },
  button: {
    marginTop: -30,
    backgroundColor: "#EE4622",
    paddingVertical: 12,
    width: 220,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonLogin: {
    marginTop: -200,
    backgroundColor: "#EE4622",
    paddingVertical: 12,
    width: 220,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonReg: {
    marginTop: -145,
    backgroundColor: "#EE4622",
    paddingVertical: 12,
    width: 220,
    borderRadius: 12,
    alignItems: "center",
  },
});
