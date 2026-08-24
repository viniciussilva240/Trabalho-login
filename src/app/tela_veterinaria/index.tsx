import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function TelaVeterinaria() {
  const [pesoRacao, setPesoRacao] = useState('');
  const [racaoDiaria, setRacaoDiaria] = useState<number | null>(null);

  const [pesoVacina, setPesoVacina] = useState('');
  const [dosePorKg, setDosePorKg] = useState('');
  const [doseRecomendada, setDoseRecomendada] = useState<number | null>(null);

  function calcularRacao() {
    const peso = parseFloat(pesoRacao);
    if (isNaN(peso) || peso <= 0) {
      alert('Digite um peso válido.');
      return;
    }

    setRacaoDiaria(peso * 0.03 * 1000);
  }

  function calcularDose() {
    const peso = parseFloat(pesoVacina);
    const dose = parseFloat(dosePorKg);
    if (isNaN(peso) || peso <= 0 || isNaN(dose) || dose <= 0) {
      alert('Digite valores válidos.');
      return;
    }
    setDoseRecomendada(peso * dose);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cuidado animal</Text>
        <Text style={styles.headerSubtitle}>Calculadora de ração e vacina</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>

        {/* Seção Ração */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>□  Cálculo de ração</Text>

          <Text style={styles.label}>Peso do animal (kg)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 12"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={pesoRacao}
            onChangeText={setPesoRacao}
          />

          <TouchableOpacity style={styles.button} onPress={calcularRacao}>
            <Text style={styles.buttonText}>Calcular ração</Text>
          </TouchableOpacity>

          {racaoDiaria !== null && (
            <View style={styles.resultCard}>
              <Text style={styles.resultLabel}>Ração{'\n'}diária</Text>
              <Text style={styles.resultValue}>{racaoDiaria.toFixed(0)} g</Text>
            </View>
          )}
        </View>

        {/* Seção Vacina */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>□  Dose de vacina</Text>

          <Text style={styles.label}>Peso do animal (kg)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 12"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={pesoVacina}
            onChangeText={setPesoVacina}
          />

          <Text style={styles.label}>Dose por kg (ml)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 0.5"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={dosePorKg}
            onChangeText={setDosePorKg}
          />

          <TouchableOpacity style={styles.button} onPress={calcularDose}>
            <Text style={styles.buttonText}>Calcular dose</Text>
          </TouchableOpacity>

          {doseRecomendada !== null && (
            <View style={[styles.resultCard, styles.resultCardBlue]}>
              <Text style={styles.resultLabel}>Dose recomendada</Text>
              <Text style={styles.resultValue}>{doseRecomendada.toFixed(1)} ml</Text>
            </View>
          )}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
  },
  header: {
    backgroundColor: '#3F2FBF',
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 4,
  },
  scroll: {
    padding: 16,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#3F2FBF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    color: '#ccc',
    fontSize: 13,
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#726464ff',
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    color: '#ffffff',
    marginBottom: 6,
  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 14,
  },
  buttonText: {
    color: '#1a1a2e',
    fontSize: 15,
    fontWeight: '600',
  },
  resultCard: {
    backgroundColor: '#68686dff',
    borderRadius: 8,
    padding: 14,
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultCardBlue: {
    backgroundColor: '#1a2a4a',
  },
  resultLabel: {
    color: '#9ca39cff',
    fontSize: 13,
    fontWeight: '600',
  },
  resultValue: {
    color: '#d4e4d4ff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
