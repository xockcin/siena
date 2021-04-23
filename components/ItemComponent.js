import React, { Component } from 'react';
import { items } from "../shared/items";
import {View, Image, Text, StyleSheet} from 'react-native'
import { Divider } from "react-native-elements";
import Card from "./CardComponent"

const item = items[0]

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.titleBox}>
          <Image style={styles.logo} source={require("./siena-logo.jpg")} />
          <View>
            <Text style={styles.title}>{item.name}</Text>
            <Divider style={{ backgroundColor: "white", height: 2 }} />
          </View>
        </View>
        <Card item={item} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#82AB01",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 36,
    marginBottom: 20,
  },
  logo: {
    height: 100,
    width: 70,
    marginLeft: 20,
    marginRight: 30,
  },
  titleBox: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Item;