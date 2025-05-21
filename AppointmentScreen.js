import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AppointmentScreen = ({ route, navigation }) => {
  const { doctor, category } = route.params;
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setStartDate(selectedDate);
    }
  };

  const handleTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setStartTime(selectedTime);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Book Appointment</Text>
      <Text style={styles.subtitle}>Please fill in the information below to continue...</Text>
      
      <Text style={styles.sectionTitle}>Personal Information</Text>
      
      <Text style={styles.label}>Full name*</Text>
      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
        placeholder="Enter your full name"
      />
      
      <Text style={styles.label}>Age*</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        placeholder="Enter your age"
        keyboardType="numeric"
      />
      
      <Text style={styles.label}>Date of birth*</Text>
      <TextInput
        style={styles.input}
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
        placeholder="MM/DD/YYYY"
      />
      
      <Text style={styles.label}>Gender</Text>
      <View style={styles.genderContainer}>
        <TouchableOpacity 
          style={[styles.genderButton, gender === 'Female' && styles.selectedGender]}
          onPress={() => setGender('Female')}
        >
          <Text style={gender === 'Female' ? styles.selectedGenderText : styles.genderText}>Female</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.genderButton, gender === 'Male' && styles.selectedGender]}
          onPress={() => setGender('Male')}
        >
          <Text style={gender === 'Male' ? styles.selectedGenderText : styles.genderText}>Male</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.genderButton, gender === 'Other' && styles.selectedGender]}
          onPress={() => setGender('Other')}
        >
          <Text style={gender === 'Other' ? styles.selectedGenderText : styles.genderText}>Other</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.sectionTitle}>Appointment Information</Text>
      <Text style={styles.label}>Doctor: {doctor.name} ({category})</Text>
      
      <Text style={styles.label}>Please describe your symptoms...</Text>
      <TextInput
        style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
        value={symptoms}
        onChangeText={setSymptoms}
        placeholder="Describe your symptoms here"
        multiline
      />
      
      <Text style={styles.label}>Start Date</Text>
      <TouchableOpacity 
        style={styles.input}
        onPress={() => setShowDatePicker(true)}
      >
        <Text>{startDate.toLocaleDateString()}</Text>
      </TouchableOpacity>
      
      <Text style={styles.label}>Start Time</Text>
      <TouchableOpacity 
        style={styles.input}
        onPress={() => setShowTimePicker(true)}
      >
        <Text>{startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
      </TouchableOpacity>
      
      {showDatePicker && (
        <DateTimePicker
          value={startDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      
      {showTimePicker && (
        <DateTimePicker
          value={startTime}
          mode="time"
          display="default"
          onChange={handleTimeChange}
        />
      )}
      
      <TouchableOpacity 
        style={styles.bookButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.bookButtonText}>Request Appointment</Text>
      </TouchableOpacity>
    </ScrollView>
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
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    justifyContent: 'center',
  },
  genderContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  genderButton: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  selectedGender: {
    backgroundColor: '#2a9d8f',
    borderColor: '#2a9d8f',
  },
  genderText: {
    color: '#333',
  },
  selectedGenderText: {
    color: 'white',
  },
  bookButton: {
    backgroundColor: '#ef399b',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  bookButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AppointmentScreen;
