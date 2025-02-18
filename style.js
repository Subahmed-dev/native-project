
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fda',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    logo: {
      width: 150,
      height: 150,
      marginBottom: 20,
    },
    heading: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
      textAlign: 'center',
    },                                                          
    tagline: {
      fontSize: 16,
      color: '#555',
      marginBottom: 30,
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#3498db', 
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      marginTop: 10,
      width: '80%',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  export default styles;