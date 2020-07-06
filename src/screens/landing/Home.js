import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Container, Text, Spinner } from "native-base";

import Logo from "../../assets/images/logo.png";
import DS from "../../assets/images/dumbsound.png";

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            marginTop: 10,
            flex: 3,
            alignItems: "center",
          }}
        >
          <Image style={styles.logo} source={Logo} resizeMode="contain" />
        </View>
        <View style={{ width: "100%", flex: 3, alignItems: "center" }}>
          <Image source={DS} style={styles.logoDumb} resizeMode="contain" />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Auth");
            }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "600" }}>
              Go to Music
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default HomeScreen;

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
});
