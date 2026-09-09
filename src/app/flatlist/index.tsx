import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

type Tarefa = {
  id: string;
  nome: string;
};

export default function TelaFlatList() {
  const [nomeTarefa, setNomeTarefa] = useState('');
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  function adicionarTarefa() {
    if (!nomeTarefa.trim()) {
      return;
    }
    const novaTarefa: Tarefa = {
      id: Date.now().toString(),
      nome: nomeTarefa.trim(),
    };
    setTarefas(prev => [...prev, novaTarefa]);
    setNomeTarefa('');
  }

  function removerTarefa(id: string) {
    setTarefas(prev => prev.filter(tarefa => tarefa.id !== id));
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.headerText}>Gerenciador de Tarefas</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome da tarefa..."
          placeholderTextColor="#aaa"
          value={nomeTarefa}
          onChangeText={setNomeTarefa}
          onSubmitEditing={adicionarTarefa}
          returnKeyType="done"
        />
        <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarTarefa}>
          <Text style={styles.botaoAdicionarTexto}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.contador}>
        {tarefas.length} {tarefas.length === 1 ? 'tarefa' : 'tarefas'}
      </Text>

      <FlatList
        data={tarefas}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={
          <View style={styles.vazioContainer}>
            <Text style={styles.vazioTexto}>Nenhuma tarefa adicionada.</Text>
            <Text style={styles.vazioSubtexto}>Digite acima e clique em Adicionar.</Text>
          </View>
        }
        renderItem={({ item, index }) => (
          <View style={styles.tarefaItem}>
            <Text style={styles.tarefaNumero}>{index + 1}.</Text>
            <Text style={styles.tarefaNome}>{item.nome}</Text>
            <TouchableOpacity
              style={styles.botaoRemover}
              onPress={() => removerTarefa(item.id)}
            >
              <Text style={styles.botaoRemoverTexto}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  header: {
    backgroundColor: '#3F2FBF',
    paddingVertical: 18,
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    margin: 16,
    gap: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: '#333',
  },
  botaoAdicionar: {
    backgroundColor: '#3F2FBF',
    borderRadius: 8,
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoAdicionarTexto: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  contador: {
    paddingHorizontal: 16,
    marginBottom: 8,
    fontSize: 13,
    color: '#888',
    fontWeight: '500',
  },
  lista: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  vazioContainer: {
    marginTop: 60,
    alignItems: 'center',
  },
  vazioTexto: {
    fontSize: 16,
    color: '#999',
    fontWeight: '600',
  },
  vazioSubtexto: {
    fontSize: 13,
    color: '#bbb',
    marginTop: 6,
  },
  tarefaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  tarefaNumero: {
    fontSize: 14,
    color: '#aaa',
    marginRight: 10,
    width: 22,
  },
  tarefaNome: {
    flex: 1,
    fontSize: 15,
    color: '#222',
  },
  botaoRemover: {
    backgroundColor: '#fee2e2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  botaoRemoverTexto: {
    color: '#dc2626',
    fontSize: 13,
    fontWeight: '600',
  },
});
