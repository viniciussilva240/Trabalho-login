import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

type Vinho = {
  id: string;
  nome: string;
  descricao: string;
  imagem: any;
};

const VINHOS: Vinho[] = [
  {
    id: '1',
    nome: 'Chatigny Chardonnay',
    descricao:
      'Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.',
    imagem: require('../../../assets/vinhos/vinho-branco.jpg'),
  },
  {
    id: '2',
    nome: 'Concha y Toro Exportacion',
    descricao:
      'Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.',
    imagem: require('../../../assets/vinhos/vinho-rose.jpg'),
  },
  {
    id: '3',
    nome: "Portada Winemaker's",
    descricao:
      'Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi. Perfeito com queijo parmesão e carnes assadas ou grelhadas.',
    imagem: require('../../../assets/vinhos/vinho-tinto.jpg'),
  },
  {
    id: '4',
    nome: 'Elvio Cogno Ravera Barolo',
    descricao:
      'Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é rubi intensa.',
    imagem: require('../../../assets/vinhos/vinho-especial.jpg'),
  },
  {
    id: '5',
    nome: 'Vinho Seco Reserva',
    descricao:
      'Vinho seco elegante, com acidez equilibrada e notas minerais. Ideal para acompanhar frutos do mar e queijos curados.',
    imagem: require('../../../assets/vinhos/vinho-seco.jpg'),
  },
];

export default function AdegaCatalogo() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <StatusBar style="light" />

      <FlatList
        data={VINHOS}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.lista}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.titulo}>Nossos vinhos</Text>
            <Text style={styles.subtitulo}>
              Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.imagem} style={styles.cardImagem} resizeMode="contain" />
            <View style={styles.cardTexto}>
              <Text style={styles.cardNome}>{item.nome}</Text>
              <Text style={styles.cardDescricao}>{item.descricao}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  lista: {
    padding: 16,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
  card: {
    backgroundColor: '#c9a99a',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 14,
    overflow: 'hidden',
  },
  cardImagem: {
    width: 70,
    height: 110,
    borderRadius: 6,
    marginRight: 12,
  },
  cardTexto: {
    flex: 1,
  },
  cardNome: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 6,
  },
  cardDescricao: {
    fontSize: 12,
    color: '#2a1a1a',
    lineHeight: 18,
  },
});
