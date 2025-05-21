import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import CategoryButton from '../components/CategoryButton';

const categories = [
  { id: '1', name: 'Heart' },
  { id: '2', name: 'Dental' },
  { id: '3', name: 'Brain' },
  { id: '4', name: 'Eye' },
];

const featuredDoctors = [
  { id: '1', name: 'Dr. Ahmed', category: 'Heart'},
  { id: '2', name: 'Dr. Mohammed', category: 'Heart' },
  { id: '3', name: 'Dr. Ali', category: 'Heart' },
  { id: '4', name: 'Dr. Noura', category: 'Heart' },
  { id: '5', name: 'Dr. Sarah', category: 'Dental' },
  { id: '6', name: 'Dr. Reema', category: 'Dental' },
  { id: '7', name: 'Dr. Khalid', category: 'Dental' },
  { id: '8', name: 'Dr. Faisal', category: 'Dental' },
  { id: '9', name: 'Dr. Abdulaziz', category: 'Brain' },
  { id: '10', name: 'Dr. Majed', category: 'Brain' },
  { id: '11', name: 'Dr. Abdullah', category: 'Brain' },
  { id: '12', name: 'Dr. Maryam', category: 'Brain' },
  { id: '13', name: 'Dr. Haifa', category: 'Eye' },
  { id: '14', name: 'Dr. Omar', category: 'Eye' },
  { id: '15', name: 'Dr. Amal', category: 'Eye' },
  { id: '16', name: 'Dr. Yousef', category: 'Eye' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to AppointWell</Text>
      <Text style={styles.subtitle}>Find your desired specialist</Text>
      
      <TextInput
        style={styles.searchInput}
        placeholder="Search for Doctor..."
      />
      
      <Text style={styles.sectionTitle}>Category</Text>
      <View style={styles.categoriesContainer}>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            title={category.name}
            onPress={() => navigation.navigate('DoctorsList', { category: category.name })}
          />
        ))}
      </View>
      
      <Text style={styles.sectionTitle}>Doctors</Text>
      <FlatList
        horizontal
        data={featuredDoctors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.doctorCard}
            onPress={() => navigation.navigate('Appointment', { doctor: item })}
          >
             <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('AppoinmentScreen')}
                  ></TouchableOpacity>
            <Text style={styles.doctorCategory}>{item.category}</Text>
            <Text style={styles.doctorName}>{item.name}</Text>
            <Text style={styles.bookText}>Book Appointment</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.featuredList}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    paddingBottom: 80, // إضافة مساحة للتبويب السفلي
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  searchInput: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  featuredList: {
    paddingBottom: 20,
  },
  doctorCard: {
    width: 150,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
  },
  doctorCategory: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookText: {
    color: '#ef399b',
    fontSize: 14,
  },
});


export default HomeScreen;
