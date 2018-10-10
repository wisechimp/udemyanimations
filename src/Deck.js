import React, { Component } from 'react';
import {
  View,
  Animated,
  PanResponder
 } from 'react-native';

class Deck extends Component {
  constructor(props) {
    super(props);

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        console.log(gesture);
      },
      onPanResponderRelease: () => {}
    });
      //Could write: this.panResponder = panResponder;
      //But this is generally used despite state never being latered
      this.state = { panResponder };
  }

  renderCards() {
    return this.props.data.map(item => {
      return this.props.renderCard(item);
    });
  }

  render() {
    return (
      <Animated.View>
        <View {...this.state.panResponder.panHandlers}>
          {this.renderCards()}
        </View>
      </Animated.View>
    );
  }
}

export default Deck;
