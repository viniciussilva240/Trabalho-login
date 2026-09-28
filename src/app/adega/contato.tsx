import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';

type InfoContato = {
  icone: React.ReactNode;
  titulo: string;
  valor: string;
};

const CONTATOS: InfoContato[] = [
  {
    icone: <FontAwesome name="phone" size={32} color="#6B0000" />,
    titulo: 'Telefone:',
    valor: '+55 21 000000000',
  },
  {
    icone: <MaterialIcons name="location-on" size={32} color="#6B0000" />,
    titulo: 'Endereço:',
    valor: 'Av. 123, 222 - Rio de Janeiro RJ',
  },
  {
    icone: <MaterialIcons name="email" size={32} color="#6B0000" />,
    titulo: 'Email:',
    valor: 'preferida@adega.com.br',
  },
  {
    icone: <Ionicons name="logo-instagram" size={32} color="#6B0000" />,
    titulo: 'Instagram:',
    valor: '@adegapreferida',
  },
];

export default function AdegaContato() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.titulo}>
          Entre em contato conosco para comprar nossos produtos
        </Text>

        {CONTATOS.map(item => (
          <View key={item.titulo} style={styles.card}>
            {item.icone}
            <Text style={styles.cardTitulo}>{item.titulo}</Text>
            <Text style={styles.cardValor}>{item.valor}</Text>
          </View>
        ))}
      </ScrollView>
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
    paddingBottom: 40,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 24,
    lineHeight: 28,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 14,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6B0000',
    marginTop: 8,
    marginBottom: 4,
  },
  cardValor: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
  },
});
