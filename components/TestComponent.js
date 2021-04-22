import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ScrollView
} from "react-native";

import {items} from '../shared/items'

const Item = ({ name, img }) => {
  let icon = img
  return (
    <View style={styles.item}>
      <Image style={styles.img} source={icon} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const Test = () => {
  const renderItem = ({ item }) => <Item name={item.name} img={item.image} />;
  console.log(require("./apples.jpg"))
  console.log(typeof(items[0].image));
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#FFFFFF"
  },
  item: {
    backgroundColor: "#e5e5e5",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center"
  },
  name: {
    fontSize: 32,
    fontFamily: "serif"
  },
  img: {
    height: 90,
    width: 90,
    marginRight: 10,
  },
});

export default Test;
