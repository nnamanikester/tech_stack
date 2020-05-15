import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  FlatList,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
  state = {};

  renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={({item}) => this.renderItem(item)}
        keyExtractor={(library) => `"${library.id}"`}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);
