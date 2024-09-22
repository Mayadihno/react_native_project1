import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uuid: 1,
      name: 'John Doe',
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      status: 'active',
    },
    {
      uuid: 2,
      name: 'Jane Smith',
      imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
      status: 'inactive',
    },
    {
      uuid: 3,
      name: 'Alice Johnson',
      imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
      status: 'active',
    },
    {
      uuid: 4,
      name: 'Bob Brown',
      imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
      status: 'inactive',
    },
    {
      uuid: 5,
      name: 'Charlie Green',
      imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
      status: 'active',
    },
  ];
  return (
    <View>
      <View>
        <Text style={styles.headingText}>Contact List</Text>
      </View>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(item => (
          <View key={item.uuid} style={styles.userCard}>
            <Image
              source={{
                uri: item.imageUrl,
              }}
              style={styles.image}
            />
            <View style={styles.userText}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userStatus}>{item.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  container: {
    marginHorizontal: 10,
    paddingTop: 8,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
  },
  userCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userStatus: {
    fontSize: 16,
  },
  userText: {
    paddingLeft: 10,
  },
});
