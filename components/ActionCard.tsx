import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function websiteLink(url: string) {
    Linking.openURL(url);
  }
  return (
    <View>
      <Text style={styles.headingText}>Action Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            What's new in javascript 21 -ES21
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://imgs.search.brave.com/XKUD749tjOvSP2maFZkPmTckY7mAfnglBg7J6YgWEgg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvSG9t/ZVBhZ2UvRm91clBh/Y2svQzItUGhvdG9z/LWlTdG9jay0xMzU2/MTk3Njk1LmpwZw',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText} numberOfLines={4}>
            The Oracle Technology Network License Agreement for Oracle Java SE
            is substantially different from prior Oracle JDK 8 licenses. This
            license permits certain uses, such as personal use and development
            use, at no cost -- but other uses authorized under prior Oracle JDK
            licenses may no longer be available. Please review the terms
            carefully before downloading and using this product. FAQs are
            available here. Commercial license and support are available for a
            low cost with Java SE Universal Subscription.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => websiteLink('https://mayabeauty.netlify.app/')}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => websiteLink('https://mayadihno.vercel.app/')}>
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 2,
  },
  card: {
    width: 350,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#5c5a76',
    borderRadius: 6,
    elevation: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
    textShadowRadius: 2,
  },
  headerContainer: {
    padding: 5,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  cardImage: {
    height: 180,
  },
  bodyContainer: {
    padding: 5,
  },
  bodyText: {
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
    lineHeight: 20,
    paddingHorizontal: 5,
    paddingTop: 5,
  },
  footerContainer: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
  socialLinks: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#000',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 6,
    elevation: 8,
    textAlign: 'center',
  },
});
