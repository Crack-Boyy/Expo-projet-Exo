import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export function ExperienceCounter() {

  const [experience, setExperience] = useState(3);

  function increaseExperience() {
    setExperience(experience + 1);
  }

  function decreaseExperience() {
    setExperience(experience - 1);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={increaseExperience} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={decreaseExperience} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.experienceText}>J&apos;ai {experience} années d&apos;experience</Text>
    </View>
  );
}
const styles = StyleSheet.create({
 container: {
 padding: 20,
 alignItems: 'flex-start',
 },
 button: {
 backgroundColor: '#e7eef5ff',
 padding: 15,
 borderRadius: 8,
 marginBottom: 20,
 },
 buttonText: {
   fontSize: 16,
   fontWeight: 'bold',
 },
 experienceText: {
   fontSize: 25,
   color: '#367dc0ff',
 },
});