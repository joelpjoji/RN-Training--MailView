import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';


const Item = ({name, subject, content}) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.subject}>{subject}</Text>
    <Text style={styles.content}>{content}</Text>
  </View>
);

const App = () => {
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => }>
      <Item name={item.name} subject={item.subject} content={item.content} />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mail}>Mails</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  mail: {
    fontSize: 25,
    alignSelf: 'center',
  },
  name: {
    fontSize: 25,
  },
  subject: {
    fontSize: 20,
  },
  content: {
    fontSize: 15,
  },
});

export default App;
