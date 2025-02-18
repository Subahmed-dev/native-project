import React from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import styles from '../../style'; // Ensure `style.js` is correctly placed relative to this file

export default function HomeScreen({ navigation }) {
  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'SignIn' }],
    });
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://via.placeholder.com/150' }} 
        style={styles.logo} 
        resizeMode="contain" 
      />
      <Text style={styles.heading}>Welcome to MyApp</Text>
      <Text style={styles.tagline}>Your tagline or introduction goes here!</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => alert('Continue clicked!')}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Next')}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, { backgroundColor: 'red' }]}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>

      <StatusBar />
    </View>
  );
}
