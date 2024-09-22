import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View style={styles.topView}>
      <Text style={styles.headingText}>Fancy Card</Text>
      <View style={[styles.card, styles.cardEleVated]}>
        <Image
          source={{
            uri: 'https://imgs.search.brave.com/XKUD749tjOvSP2maFZkPmTckY7mAfnglBg7J6YgWEgg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvSG9t/ZVBhZ2UvRm91clBh/Y2svQzItUGhvdG9z/LWlTdG9jay0xMzU2/MTk3Njk1LmpwZw',
          }}
          style={styles.imageStyle}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hilda Basi</Text>
          <Text style={styles.cardLabel}>Cooking at Hilda Kitchen</Text>
          <Text style={styles.cardDescription}>
            Nice Kitchen to prepare different variety of meals
          </Text>
          <Text style={styles.cardFooter}>
            12 mins away from ikeja city Mall
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  topView: {
    paddingHorizontal: 6,
    marginVertical: 16,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 2,
  },
  card: {
    marginTop: 10,
    backgroundColor: '#5dadc6',
    borderRadius: 10,
  },
  cardEleVated: {
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  imageStyle: {
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    objectFit: 'fill',
  },
  cardTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'semibold',
    paddingBottom: 3,
  },
  cardBody: {
    paddingHorizontal: 10,
    flex: 1,
    flexGrow: 1,
  },
  cardLabel: {
    color: 'white',
    fontSize: 20,
    paddingVertical: 5,
  },
  cardDescription: {
    color: 'white',
    fontSize: 16,
  },
  cardFooter: {
    color: 'white',
    fontSize: 16,
    paddingVertical: 10,
  },
});
