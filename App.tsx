import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Flatcards from './components/Flatcards';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.sectionContainer}>
          <Flatcards />
          <ElevatedCard />
          <FancyCard />
          <ActionCard />
          <ContactList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  sectionContainer: {
    marginHorizontal: 6,
    marginVertical: 10,
  },
});
