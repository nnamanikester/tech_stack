import React, {Component} from 'react';
import {CardSection} from './common';
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  LayoutAnimation,
  View,
  NativeModules,
} from 'react-native';
import * as actions from '../actions';
import {connect} from 'react-redux';

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {
  state = {};

  componentDidUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  renderDescription() {
    const {library, expanded} = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{flex: 1}}>{library.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const {id, title} = this.props.library;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.title}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return {
    expanded,
  };
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingLeft: 15,
  },
});

export default connect(mapStateToProps, actions)(ListItem);
