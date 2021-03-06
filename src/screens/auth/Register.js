import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Picker,
  Icon
} from "react-native";
import { Container, Input, Item, Textarea } from "native-base";
import Logo from "../../assets/images/logo.png";

const Regis = ({ navigation }) => {
  return (
    <ScrollView>
      <Container style={styles.container}>
        <View
          style={{
            width: "100%",
            marginBottom: 20,
            marginTop: -280,
            flex: 0,
            alignItems: "center",
          }}
        >
          <Image style={styles.logo} source={Logo} resizeMode="contain" />
        </View>
        <Item regular rounded style={styles.inputText}>
          <Input
            textContentType="emailAddress"
            placeholder="Enter Email"
            style={styles.input}
          />
        </Item>
        <Item regular rounded style={styles.inputText}>
          <Input
            textContentType="password"
            placeholder="Enter Password"
            style={styles.input}
          />
        </Item>
        <Item regular rounded style={styles.inputText}>
          <Input
            textContentType="Gender"
            placeholder="Enter Gender"
            style={styles.input}
          />
        </Item>
        <Item regular rounded style={styles.inputText}>
          <Input
            textContentType="Phone"
            placeholder="Enter Phone"
            style={styles.input}
          />
        </Item>
        <Textarea
          style={{ width: 280, marginTop: 10, borderRadius: 10 }}
          rowSpan={5}
          bordered
          rounded
          placeholder="Address"
        />
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => {
            navigation.navigate("HomeMusic");
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "600" }}>
            Registrasi
          </Text>
        </TouchableOpacity>
      </Container>
    </ScrollView>
  );
};

export default Regis;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: { width: 100, height: 100, marginTop: 200 },
  logoText: {
    fontWeight: "100",
    fontSize: 32,
  },
  inputText: {
    marginTop: 10,
    marginHorizontal: 80,
    marginLeft: 80,
    color: "#FFFFFF",
  },
  input: {
    color: "#FFFFFF",
    paddingLeft: 20,
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
    marginTop: 15,
    backgroundColor: "#EE4622",
    paddingVertical: 12,
    width: 285,
    borderRadius: 285 / 2,
    alignItems: "center",
  },
});
