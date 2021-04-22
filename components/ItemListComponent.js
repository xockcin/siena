import React, { Component } from 'react';
import {FlatList} from 'react-native'
import {ListItem} from 'react-native-elements'


class ItemList extends Component {

  render() {
    const renderItem = ({ item }) => {
      return (
        <ListItem
          title={item.name}
        />
      );
    }
    return (
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default ItemList;