import React,{useState} from "react";
import { StyleSheet, View, Image } from "react-native";

import { AntDesign, Entypo } from "@expo/vector-icons";

import { gs } from "../../../styles";

// image
import Jumbo from "../../../assets/images/circel.jpg";

const Header = ({navigation}) => {
    const [hart,setHart]=useState(0)
  return (
    <View>
      <Image source={Jumbo} style={{ width: "100%", height: 350 }} />
      <View style={styles.topButtons}>
        <AntDesign
          name="close" 
          size={24}
          color="#FFF"
          onPress={() => {
            navigation.navigate("HomeMusic");
          }}
        />
        <View style={gs.rowCenter}>
          <AntDesign
            name={hart%2!==0?"heart":"hearto"}
            size={24}
            color="#FFF"
            style={styles.topButtonRight}
            onPress={()=>{
                setHart(hart+1)
            }}
          />
          <AntDesign
            name="download"
            size={24}
            color="#FFF"
            style={styles.topButtonRight}
          />
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
