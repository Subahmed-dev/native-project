import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const posts = [
  {
    id: '1',
    user: 'Sara',
    profileImage: require('../../assets/profile1.jpg'),
    postImage: require('../../assets/post1.jpg'),
    likes: 120,
    caption: 'What a view!',
  },
  {
    id: '2',
    user: 'Jain Smith',
    profileImage: require('../../assets/profile2.jpg'),
    postImage: require('../../assets/post2.jpg'),
    likes: 200,
    caption: 'Morning coffee vibes ☕',
  },
];

export default function HomeScreen() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height; 

  return (
    <View style={[styles.container, isLandscape && styles.containerLandscape]}>
      {/* Header */}
      <View style={[styles.header, isLandscape && styles.headerLandscape]}>
        <Text style={styles.logo}>Instagram</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <FontAwesome name="heart-o" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="send-o" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Posts */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        numColumns={isLandscape ? 2 : 1} // Show 2 columns in landscape mode
        renderItem={({ item }) => (
          <View style={[styles.post, isLandscape && styles.postLandscape]}>
            <View style={styles.postHeader}>
              <Image source={item.profileImage} style={styles.profilePic} />
              <Text style={styles.username}>{item.user}</Text>
            </View>
            <Image source={item.postImage} style={[styles.postImage, { height: isLandscape ? 200 : 300 }]} />
            <View style={styles.postFooter}>
              <Text style={styles.likes}>{item.likes} likes</Text>
              <Text style={styles.caption}>
                <Text style={styles.username}>{item.user}</Text> {item.caption}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  containerLandscape: { flexDirection: 'row', paddingHorizontal: 10 }, 
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderColor: '#ddd' },
  headerLandscape: { paddingVertical: 5, paddingHorizontal: 20 }, 
  logo: { fontSize: 24, fontWeight: 'bold' },
  headerIcons: { flexDirection: 'row' },
  icon: { marginHorizontal: 10 },
  post: { marginBottom: 20 },
  postLandscape: { flex: 1, marginHorizontal: 5 }, 
  postHeader: { flexDirection: 'row', alignItems: 'center', padding: 10 },
  profilePic: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  username: { fontWeight: 'bold' },
  postImage: { width: '100%', resizeMode: 'cover' },
  postFooter: { padding: 10 },
  likes: { fontWeight: 'bold' },
  caption: { marginTop: 5 },
});
