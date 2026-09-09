import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

// ⚠️ Cadastre-se gratuitamente em https://pixabay.com/api/docs/ e cole sua chave aqui
const PIXABAY_KEY = '57531397-528c80b99a9e7f726fd167794';

type Produto = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  imagemUrl: string | null;
  carregando: boolean;
};

async function buscarImagem(termo: string): Promise<string | null> {
  try {
    const url = `https://pixabay.com/api/?key=${PIXABAY_KEY}&q=${encodeURIComponent(termo)}&image_type=photo&per_page=3&safesearch=true&lang=pt`;
    const resposta = await fetch(url);
    const dados = await resposta.json();
    if (dados.hits && dados.hits.length > 0) {
      return dados.hits[0].webformatURL;
    }
    return null;
  } catch {
    return null;
  }
}

export default function TelaMap() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');

  async function adicionarProduto() {
    if (!nome.trim()) {
      alert('Digite o nome do produto.');
      return;
    }
    const precoNum = parseFloat(preco.replace(',', '.'));
    const qtdNum = parseInt(quantidade);

    if (isNaN(precoNum) || precoNum < 0) {
      alert('Digite um preço válido.');
      return;
    }
    if (isNaN(qtdNum) || qtdNum < 0) {
      alert('Digite uma quantidade válida.');
      return;
    }

    const novoId = Date.now().toString();

    // Adiciona o produto com carregando=true enquanto busca a imagem
    setProdutos(prev => [
      ...prev,
      { id: novoId, nome: nome.trim(), preco: precoNum, quantidade: qtdNum, imagemUrl: null, carregando: true },
    ]);

    setNome('');
    setPreco('');
    setQuantidade('');

    // Busca a imagem e atualiza o produto
    const imagem = await buscarImagem(nome.trim());
    setProdutos(prev =>
      prev.map(p =>
        p.id === novoId ? { ...p, imagemUrl: imagem, carregando: false } : p
      )
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.headerText}>Produtos</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>

        {/* Input nome */}
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="cube-outline" size={20} color="#888" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Nome do produto"
            placeholderTextColor="#aaa"
            value={nome}
            onChangeText={setNome}
          />
        </View>

        {/* Input preço */}
        <View style={styles.inputContainer}>
          <MaterialIcons name="attach-money" size={20} color="#888" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Preço (R$)"
            placeholderTextColor="#aaa"
            keyboardType="decimal-pad"
            value={preco}
            onChangeText={setPreco}
          />
        </View>

        {/* Input quantidade */}
        <View style={styles.inputContainer}>
          <MaterialIcons name="format-list-bulleted" size={20} color="#888" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Quantidade"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
            value={quantidade}
            onChangeText={setQuantidade}
          />
        </View>

        {/* Botão adicionar */}
        <TouchableOpacity style={styles.botao} onPress={adicionarProduto}>
          <Ionicons name="add" size={20} color="#fff" />
          <Text style={styles.botaoTexto}>Adicionar Produto</Text>
        </TouchableOpacity>

        {/* Lista com map */}
        <View style={styles.lista}>
          {produtos.map(produto => (
            <View key={produto.id} style={styles.produtoItem}>

              {/* Imagem ou placeholder */}
              <View style={styles.imagemContainer}>
                {produto.carregando ? (
                  <ActivityIndicator size="small" color="#1a7a3c" />
                ) : produto.imagemUrl ? (
                  <Image
                    source={{ uri: produto.imagemUrl }}
                    style={styles.imagem}
                    resizeMode="cover"
                  />
                ) : (
                  <MaterialCommunityIcons name="image-off-outline" size={26} color="#aaa" />
                )}
              </View>

              <View style={styles.produtoInfo}>
                <Text style={styles.produtoNome}>{produto.nome}</Text>
                <Text style={styles.produtoPreco}>
                  R$ {produto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </Text>
                <Text style={styles.produtoQtd}>Qtde: {produto.quantidade}</Text>
              </View>

              <Ionicons name="chevron-forward" size={20} color="#aaa" />
            </View>
          ))}

          {produtos.length === 0 && (
            <Text style={styles.vazioTexto}>Nenhum produto adicionado ainda.</Text>
          )}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f0',
  },
  header: {
    backgroundColor: '#1a7a3c',
    paddingVertical: 18,
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scroll: {
    padding: 16,
    paddingBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dde8dd',
    marginBottom: 10,
    paddingHorizontal: 12,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 13,
    fontSize: 15,
    color: '#333',
  },
  botao: {
    flexDirection: 'row',
    backgroundColor: '#1a7a3c',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 20,
    gap: 6,
  },
  botaoTexto: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  lista: {
    gap: 10,
  },
  produtoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e8f5e9',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#c8e6c9',
  },
  imagemContainer: {
    width: 52,
    height: 52,
    borderRadius: 10,
    backgroundColor: '#c8e6c9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    overflow: 'hidden',
  },
  imagem: {
    width: 52,
    height: 52,
  },
  produtoInfo: {
    flex: 1,
  },
  produtoNome: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  produtoPreco: {
    fontSize: 13,
    color: '#444',
    marginTop: 2,
  },
  produtoQtd: {
    fontSize: 13,
    color: '#666',
    marginTop: 1,
  },
  vazioTexto: {
    textAlign: 'center',
    color: '#aaa',
    fontSize: 15,
    marginTop: 20,
  },
});
