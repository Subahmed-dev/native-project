import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import styles from '../../style';

export default function NextScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Next Screen</Text>
            <Text style={styles.tagline}>This is your next screen!</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>

            <StatusBar />
        </View>
    );
}
