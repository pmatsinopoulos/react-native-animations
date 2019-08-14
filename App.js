/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from "react";
import { Button, Image, LayoutAnimation, StyleSheet, View } from "react-native";

import jake from "./jake.png";

const App = () => {
  const [position, setPosition] = useState("flex-start");
  const handlePress = newPosition => {
    LayoutAnimation.spring();
    setPosition(newPosition);
  };

  return (
    <View style={[styles.container, { justifyContent: position }]}>
      <Image source={jake} />
      <View style={styles.buttonsContainer}>
        <Button
          style={styles.button}
          title="Top"
          onPress={() => handlePress("flex-start")}
        />
        <Button
          style={styles.button}
          title="Middle"
          onPress={() => handlePress("center")}
        />
        <Button
          style={styles.button}
          title="Bottom"
          onPress={() => handlePress("flex-end")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
    bottom: 16,
    width: "100%"
  },
  button: {
    width: 100
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 64,
    paddingBottom: 32
  }
});

export default App;
