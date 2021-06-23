import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'
import {Divider} from 'react-native-elements'
import List from './BoxListComponent'
import Frame from './FrameComponent'
import Card from './CardComponent'


class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 

    }
  }
  render() {
    return (
      <Frame title="In The Box">
        <Card />
      </Frame>
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
    marginBottom: 20
  },
  logo: {
    height: 100,
    width: 70,
    marginLeft: 20,
    marginRight: 30
  },
  titleBox: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center"
  }
});

export default MainComponent;