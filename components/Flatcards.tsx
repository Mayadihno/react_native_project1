import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Flatcards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>blue</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>green</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Yellow</Text>
        </View>
      </View>
    </View>
  );
};

export default Flatcards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 2,
  },
  container: {
    gap: 10,
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 2,
    paddingVertical: 8,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  cardOne: {
    backgroundColor: '#ef5354',
  },
  cardTwo: {
    backgroundColor: '#50dbb4',
  },
  cardThree: {
    backgroundColor: '#5da3fa',
  },
});
