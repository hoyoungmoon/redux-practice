import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

const Counter = ({index, number, diff, onIncrease, onDecrease, onSetDiff}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 100,
        padding: 20,
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <Text>{number}</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={onIncrease}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDecrease}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {},
});
export default Counter;
