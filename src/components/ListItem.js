import React, {Component} from 'react';
import {CardSection} from './common';
import {Text, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import * as actions from '../actions';
import {connect} from 'react-redux';

class ListItem extends Component {
  state = {};

  render() {
    const {id, title} = this.props.library;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.title}>{title}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingLeft: 15,
  },
});

export default connect(null, actions)(ListItem);
