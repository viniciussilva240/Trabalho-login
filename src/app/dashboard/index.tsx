import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

type CardBimestre = {
  titulo: string;
  descricao: string;
  rota: string;
  icone: keyof typeof MaterialIcons.glyphMap;
  cor: string;
  corFundo: string;
};

const bimestres: CardBimestre[] = [
  {
    titulo: '3º Bimestre',
    descricao: 'Todas As atividades do 3 Bimestre',
    rota: '/Cadastro_Contato',
    icone: 'contacts',
    cor: '#3F2FBF',
    corFundo: '#ede9fe',
  },
  {
    titulo: 'Adega Prferida',
    descricao: 'Adega Preferida',
    rota: '/adega',
    icone: 'wine-bar',
    cor: '#6B0000',
    corFundo: '#fdf2f2',
  },
  {
    titulo: 'Lanchonete',
    descricao: 'Lanchonete do IFRO',
    rota: '/lanchonete',
    icone: 'fastfood',
    cor: '#1976D2',
    corFundo: '#e3f2fd',
  },
];

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Atividades</Text>
        <Text style={styles.headerSubtitulo}>Selecione o bimestre</Text>
      </View>

      <View style={styles.conteudo}>
        {bimestres.map(b => (
          <TouchableOpacity
            key={b.titulo}
            style={[styles.card, { backgroundColor: b.corFundo, borderColor: b.cor + '44' }]}
            activeOpacity={0.85}
            onPress={() => router.push(b.rota as any)}
          >
            <View style={[styles.cardIcone, { backgroundColor: b.cor }]}>
              <MaterialIcons name={b.icone} size={32} color="#fff" />
            </View>
            <View style={styles.cardTexto}>
              <Text style={[styles.cardTitulo, { color: b.cor }]}>{b.titulo}</Text>
              <Text style={styles.cardDescricao}>{b.descricao}</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color={b.cor} />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f8',
  },
  header: {
    backgroundColor: '#3F2FBF',
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  headerTitulo: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerSubtitulo: {
    color: '#c4b5fd',
    fontSize: 15,
    marginTop: 4,
  },
  conteudo: {
    padding: 20,
    gap: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  cardIcone: {
    width: 56,
    height: 56,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  cardTexto: {
    flex: 1,
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescricao: {
    fontSize: 13,
    color: '#666',
    marginTop: 3,
  },
});
