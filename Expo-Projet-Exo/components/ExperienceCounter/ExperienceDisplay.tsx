import React from "react";
import { StyleSheet, Text } from "react-native";
interface ExperienceDisplayProps {
 experience: number;
}
export function ExperienceDisplay({experience}: ExperienceDisplayProps) {
 return (
 <Text style={styles.experienceText}>
 J&apos;ai {experience} années d&apos;experience
 </Text>
 );
}
const styles = StyleSheet.create({
 experienceText: {
 fontSize: 18,
 color: '#333',
 textAlign: 'center',
 },
});