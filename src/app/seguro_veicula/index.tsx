import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const ANO_ATUAL = new Date().getFullYear();

export default function SeguroVeicula() {
  const [anoVeiculo, setAnoVeiculo] = useState('');
  const [valorVeiculo, setValorVeiculo] = useState('');
  const [resultado, setResultado] = useState<{ idade: number; seguro: number } | null>(null);

  function calcularSeguro() {
    const ano = parseInt(anoVeiculo);
    const valor = parseFloat(valorVeiculo.replace(',', '.'));

    if (isNaN(ano) || ano < 1900 || ano > ANO_ATUAL) {
      alert('Digite um ano válido.');
      return;
    }
    if (isNaN(valor) || valor <= 0) {
      alert('Digite um valor válido.');
      return;
    }

    const idade = ANO_ATUAL - ano;
    const adicional = Math.floor(idade / 2); // 1% a cada 2 anos completos
    const taxaTotal = 5 + adicional;         // taxa base 5% + adicional
    const seguro = valor * (taxaTotal / 100);

    setResultado({ idade, seguro });
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>□  Seguro veicular</Text>
        <Text style={styles.headerSubtitle}>Calculadora do valor do seguro</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>□  Dados do veículo</Text>

          <Text style={styles.label}>Ano do veículo</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 2018"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={anoVeiculo}
            onChangeText={setAnoVeiculo}
          />

          <Text style={styles.label}>Valor do veículo (R$)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 45000"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={valorVeiculo}
            onChangeText={setValorVeiculo}
          />

          <TouchableOpacity style={styles.button} onPress={calcularSeguro}>
            <Text style={styles.buttonText}>Calcular seguro</Text>
          </TouchableOpacity>

          {resultado !== null && (
            <>
              <View style={styles.resultCardOrange}>
                <Text style={styles.resultLabel}>Idade do{'\n'}veículo</Text>
                <Text style={styles.resultValueOrange}>{resultado.idade}{'\n'}anos</Text>
              </View>

              <View style={styles.resultCardGreen}>
                <Text style={styles.resultLabel}>Valor do{'\n'}seguro</Text>
                <Text style={styles.resultValueGreen}>
                  R${'\n'}
                  {resultado.seguro.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </Text>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    backgroundColor: '#1a1a2e',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 18,
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
    backgroundColor: '#222244',
    borderRadius: 12,
    padding: 20,
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 15,
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
    backgroundColor: '#2a2a4a',
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
  resultCardOrange: {
    backgroundColor: '#3a2800',
    borderRadius: 8,
    padding: 14,
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultCardGreen: {
    backgroundColor: '#1a3a1a',
    borderRadius: 8,
    padding: 14,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultLabel: {
    color: '#aaa',
    fontSize: 13,
    fontWeight: '600',
  },
  resultValueOrange: {
    color: '#ffaa00',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  resultValueGreen: {
    color: '#88ff88',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
