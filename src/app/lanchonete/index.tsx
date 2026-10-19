import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { router, Stack } from 'expo-router';

export default function LanchoneteHome() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Stack.Screen options={{ title: 'Home' }} />

      <View style={styles.conteudo}>
        <Text style={styles.titulo}>Lanchonete do IFRO</Text>
        <Text style={styles.subtitulo}>Bem-vindo! Faça seu pedido.</Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.push('/lanchonete/cardapio')}
        >
          <Text style={styles.botaoTexto}>Ver cardápio</Text>
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
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#1a1f36',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitulo: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
    marginBottom: 40,
  },
  botao: {
    backgroundColor: '#1976D2',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 48,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
