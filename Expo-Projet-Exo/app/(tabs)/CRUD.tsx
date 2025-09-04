import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";

export default function CRUDScreen() {
const [hobbie, setHobbie] = useState('');

const [users, setUsers] = useState<{id: number, hobbie: string,}[]>([]);

  const addHobbie = () => {
    if (hobbie) {
      setUsers([...users, { id: Date.now(), hobbie }]);
      setHobbie('');
      Alert.alert('Succès', 'Hobbie ajouté');
    }
  };

  const deleteHobbie = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#d4dadfff', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/user-icon.jpg')}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title">Liste de Hobbies</ThemedText>
        
        <TextInput
          style={styles.input}
          placeholder="Par ex: Football"
          value={hobbie}
          onChangeText={setHobbie}
        />
        
        
        <TouchableOpacity style={styles.button} onPress={addHobbie}>
          <ThemedText style={styles.buttonText}>Ajouter</ThemedText>
        </TouchableOpacity>

        <ThemedText type="subtitle" style={styles.listTitle}>
          Hobbie ({users.length})
        </ThemedText>
        
        {users.map((user) => (
          <ThemedView key={user.id} style={styles.userItem}>
            <ThemedView style={styles.userInfo}>
              <ThemedText>{user.hobbie}</ThemedText>
        
            </ThemedView>
            <TouchableOpacity 
              style={styles.deleteButton}
              onPress={() => deleteHobbie(user.id)}
            >
              <ThemedText style={styles.deleteText}>✕</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        ))}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: 320,
    height: 260,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    padding: 16,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ee0000ff',
  },
  button: {
    backgroundColor: '#2db9f0ff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  listTitle: {
    marginTop: 20,
    marginBottom: 10,
  },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 12,
    marginVertical: 4,
    borderRadius: 8,
  },
  userInfo: {
    flex: 1,
  },
  deleteButton: {
    backgroundColor: '#FF6B6B',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
  },
});