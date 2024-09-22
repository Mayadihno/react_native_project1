import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const screenWidth = Dimensions.get('window').width;
const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        pagingEnabled={true}>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>more</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>side</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Smile</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 2,
  },
  container: {
    padding: 4,
  },
  card: {
    width: screenWidth / 4,
    height: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 3,
  },
  elevatedCard: {
    backgroundColor: '#cad5e2',
    borderRadius: 5,
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
    textShadowRadius: 2,
  },
});
