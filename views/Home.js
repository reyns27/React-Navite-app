import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Home = ({route}) => {
    const { User } = route.params;
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>Hello, {User}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      
    },
    Button: {
      textAlign: "center",
      width: 300,
      padding: 10,
      backgroundColor: "green",
      borderColor: "while",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 4,
      elevation: 3,
    },
  });

export default Home;
