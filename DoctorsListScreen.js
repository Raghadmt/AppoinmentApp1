import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const DoctorsListScreen = ({ route, navigation }) => {
  const { category } = route.params;
  
  // Sample data - in a real app, this would come from an API
  const doctorsData = {
    Heart: [
      { id: '1', name: 'Dr. Ahmed' },
      { id: '2', name: 'Dr. Mohammed' },
      { id: '3', name: 'Dr. Ali' },
      { id: '4', name: 'Dr. Noura' },
    ],
    Dental: [
      { id: '1', name: 'Dr. Sarah' },
      { id: '2', name: 'Dr. Reema' },
      { id: '3', name: 'Dr. Khalid' },
      { id: '4', name: 'Dr. Faisal' },
    ],
    Brain: [
      { id: '1', name: 'Dr. Majed' },
      { id: '2', name: 'Dr. Abdullah' },
      { id: '3', name: 'Dr. Maryam' },
      { id: '4', name: 'Dr. Abdulaziz' },
    ],
    Eye: [
      { id: '1', name: 'Dr. Haifa' },
      { id: '2', name: 'Dr. Omar' },
      { id: '3', name: 'Dr. Amal' },
      { id: '4', name: 'Dr. Youssef' },
    ],
  };

  const doctors = doctorsData[category] || [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category} Specialists</Text>
      
      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.doctorItem}
            onPress={() => navigation.navigate('Appointment', { doctor: item, category })}
          >
            <Text style={styles.doctorName}>{item.name}</Text>
            <Text style={styles.bookText}>Book Appointment</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  doctorItem: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bookText: {
    color: '#ef399b',
    fontSize: 14,
  },
});

export default DoctorsListScreen;
