import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { router, Stack } from 'expo-router';

export default function Pedido() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Stack.Screen options={{ title: 'Pedido' }} />

      <View style={styles.conteudo}>
        <View style={styles.okCirculo}>
          <Text style={styles.okTexto}>OK</Text>
        </View>

        <Text style={styles.titulo}>Pedido confirmado!</Text>
        <Text style={styles.subtitulo}>Em breve ficará pronto.</Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.dismissAll()}
        >
          <Text style={styles.botaoTexto}>Voltar ao início</Text>
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
    gap: 16,
  },
  okCirculo: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  okTexto: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#1a1f36',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 16,
  },
  botao: {
    backgroundColor: '#555',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 40,
    alignItems: 'center',
    width: '100%',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
