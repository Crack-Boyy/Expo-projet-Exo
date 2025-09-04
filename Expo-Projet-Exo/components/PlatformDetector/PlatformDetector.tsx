import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export function PlateformDetector(){
    return (
<View style={styles.container}>
{Platform.OS ==="ios"?(
<Text style={styles.iosText}>Hello sur iOS</Text>

):(
    <Text style={styles.androidText}>Hello sur Android</Text>
)}

<Text style={styles.infoText}>
    Plateform détectée : {Platform.OS}
</Text>
<Text style={styles.versionText}> 
                Version : {Platform.Version} 
                </Text>
</View>

    )
}

const styles = StyleSheet.create({ 
    container: { 
        padding: 20, 
        alignItems: 'center', 
    }, 
    iosText: { 
        fontSize: 24, 
        color: '#007AFF', 
        fontWeight: 'bold', 
        marginBottom: 10, 
    }, 
    androidText: { 
        fontSize: 24,
          color: '#4CAF50', 
        fontWeight: 'bold', 
        marginBottom: 10, 
    }, 
    infoText: { 
        fontSize: 16, 
        color: '#666', 
        marginTop: 10, 
    }, 
    versionText: { 
        fontSize: 14, 
        color: '#999', 
        marginTop: 5, 
    }, 
});