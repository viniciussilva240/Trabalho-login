import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Telemetria() { 
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <ScrollView>
        
        <View>
          <Text style={styles.title}>Atividade 10</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  title: {
    color: '#0270ffff' ,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
