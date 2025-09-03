import React, { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

interface HumanProps {
onPress: (name: string) => void;
photo: any;
name: string;
age: number;
email: string;
children?: ReactNode;
}

export function Human({ onPress, photo, name, age, email, children }: HumanProps) {
function onPress_() {
onPress("les dev");
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

const styles = StyleSheet.create({
container: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
},
photo: {
width: 60,
height: 60,
borderRadius: 30,
marginRight: 15,
},
info: {
flex: 1,
fontSize: 16,
},
button: {
backgroundColor: '#cfdbe7ff',
padding: 10,
borderRadius: 8,
margin: 10,
width: 202
},
buttonText: {
color: 'black',
fontSize: 16,
textAlign: 'center',
fontWeight: 'bold',
},
});