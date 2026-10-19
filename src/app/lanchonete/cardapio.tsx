import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router, Stack } from 'expo-router';

const ITENS = [
  { id: '1', nome: 'X-Burger', preco: 'R$ 18,00' },
  { id: '2', nome: 'Pizza fatia', preco: 'R$ 9,00' },
  { id: '3', nome: 'Suco natural', preco: 'R$ 7,50' },
];

export default function Cardapio() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Stack.Screen options={{ title: 'Cardápio' }} />

      <ScrollView contentContainerStyle={styles.scroll}>
        {ITENS.map(item => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardNome}>{item.nome}</Text>
            <Text style={styles.cardPreco}>{item.preco}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.rodape}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.push('/lanchonete/pedido')}
        >
          <Text style={styles.botaoTexto}>Fazer pedido</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    padding: 20,
    gap: 12,
  },
  card: {
    backgroundColor: '#e8eaf0',
    borderRadius: 10,
    padding: 18,
  },
  cardNome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1f36',
    marginBottom: 4,
  },
  cardPreco: {
    fontSize: 14,
    color: '#555',
  },
  rodape: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  botao: {
    backgroundColor: '#1976D2',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
