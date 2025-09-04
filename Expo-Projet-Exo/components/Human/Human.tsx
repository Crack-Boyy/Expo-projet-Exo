import { useNavigation } from '@react-navigation/native';
import React, { ReactNode } from 'react';
import { Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';

interface HumanProps {
onPress: (name: string) => void;
photo: any;
name: string;
age: number;
email: string;
children?: ReactNode;
}

const styles = StyleSheet.create({
  container: {
	flexDirection: 'row',
	alignItems: 'center',
	padding: 10,
	backgroundColor: '#fff',
	borderRadius: 8,
	marginBottom: 10,
	elevation: 2,
  },
  photo: {
	width: 60,
	height: 60,
	borderRadius: 30,
	marginRight: 10,
  },
  info: {
	flex: 1,
	fontSize: 16,
	color: '#333',
  },
  button: {
	backgroundColor: '#afbbcaff',
	padding: 10,
	borderRadius: 8,
	alignItems: 'center',
	marginTop: 10,
    width:202
  },
  buttonText: {
	color: '#fff',
	fontSize: 16,
	fontWeight: 'bold',
  },
});

export function Human({ onPress, photo, name, age, email, children }: HumanProps) {
const navigation = useNavigation();

function onPress_() {
onPress("les dev");

navigation.navigate('CRUD' as never);
}

return (
<React.Fragment>
<View style={styles.container}>
<Image source={photo} style={styles.photo} />
<Text style={styles.info}>
Nom: {name}
{'\n'}Age: {age}
{'\n'}Email: {email}
</Text>
</View>
{children}
<TouchableOpacity onPress={onPress_} style={styles.button}>
<Text style={styles.buttonText}>Cliquez ici</Text> 
</TouchableOpacity>
</React.Fragment>
);
}