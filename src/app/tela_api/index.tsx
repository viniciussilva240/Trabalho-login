import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';

const API_URL = 'https://apivacinacao.dev.vilhena.ifro.edu.br/proprietarios';

type Proprietario = {
  id: number;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
};

export default function TelaApi() {
  const [proprietarios, setProprietarios] = useState<Proprietario[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  async function buscarProprietarios() {
    setCarregando(true);
    setErro('');
    try {
      const resposta = await fetch(API_URL);
      const dados = await resposta.json();
      // API pode retornar { value: [...] } ou diretamente um array
      const lista = Array.isArray(dados) ? dados : dados.value;
      setProprietarios(lista);
    } catch {
      setErro('Erro ao carregar dados. Verifique sua conexão.');
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    buscarProprietarios();
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.headerText}>Proprietários</Text>
        <TouchableOpacity onPress={buscarProprietarios} style={styles.recarregarBtn}>
          <MaterialIcons name="refresh" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {carregando ? (
        <View style={styles.centro}>
          <ActivityIndicator size="large" color="#0d7c3d" />
          <Text style={styles.carregandoTexto}>Carregando...</Text>
        </View>
      ) : erro ? (
        <View style={styles.centro}>
          <MaterialIcons name="error-outline" size={48} color="#dc2626" />
          <Text style={styles.erroTexto}>{erro}</Text>
          <TouchableOpacity style={styles.botaoTentar} onPress={buscarProprietarios}>
            <Text style={styles.botaoTentarTexto}>Tentar novamente</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={proprietarios}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.lista}
          ListHeaderComponent={
            <Text style={styles.contador}>{proprietarios.length} proprietários encontrados</Text>
          }
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.cardIcone}>
                <MaterialIcons name="person" size={26} color="#0d7c3d" />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardNome}>{item.nome}</Text>
                <Text style={styles.cardDetalhe}>
                  <Text style={styles.cardLabel}>CPF: </Text>{item.cpf}
                </Text>
                <Text style={styles.cardDetalhe}>
                  <Text style={styles.cardLabel}>Tel: </Text>{item.telefone}
                </Text>
                <Text style={styles.cardDetalhe}>
                  <Text style={styles.cardLabel}>Email: </Text>{item.email}
                </Text>
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: {
    backgroundColor: '#0d7c3d',
    paddingVertical: 18,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  recarregarBtn: { padding: 4 },
  centro: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, gap: 12 },
  carregandoTexto: { fontSize: 15, color: '#666', marginTop: 8 },
  erroTexto: { fontSize: 15, color: '#dc2626', textAlign: 'center' },
  botaoTentar: {
    backgroundColor: '#0d7c3d',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 8,
  },
  botaoTentarTexto: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  lista: { padding: 16, gap: 12, paddingBottom: 40 },
  contador: { fontSize: 13, color: '#888', marginBottom: 4, fontWeight: '500' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  cardIcone: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#e8f5e9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  cardInfo: { flex: 1 },
  cardNome: { fontSize: 15, fontWeight: 'bold', color: '#1a1a1a', marginBottom: 4 },
  cardDetalhe: { fontSize: 13, color: '#555', marginTop: 2 },
  cardLabel: { fontWeight: '600', color: '#333' },
});
