import { Human } from "@/components/Human/Human";
import {ExperienceCounter} from "@/components/ExperienceCounter/ExperienceCounter"
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Alert, Image, StyleSheet } from "react-native";
export default function HomeScreen(){
function hello(name: string) {
Alert.alert("Hello " + name);
}
return (
<ParallaxScrollView
headerImage={<Image source={require('@/assets/images/partial-react-logo.png')} />}
headerBackgroundColor={{ light: '#aed2f5ff', dark: '#000000ff' }}>
<ThemedView style={styles.titleContainer}>
<ThemedText type="title">Mon profil</ThemedText>
</ThemedView>

<ThemedView style={styles.stepContainer}>
<Human
onPress={hello}
photo={require('@/assets/images/user-icon.jpg')}
name="Yohan"
age={20}
email="Yohan.m@example.com"
/>
<ExperienceCounter/>
</ThemedView>
</ParallaxScrollView>
);
}
const styles = StyleSheet.create({
titleContainer: {
flexDirection: 'row',
alignItems: 'center',
gap: 8,
},
stepContainer: {
gap: 8,
marginBottom: 8,
},
});