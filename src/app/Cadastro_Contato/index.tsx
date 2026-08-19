import { useState } from 'react'; 
import { StatusBar } from 'expo-status-bar'; 
import { SafeAreaView } from 'react-native-safe-area-context'; 
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, TextInput, TextInputProps } from 'react-native'; 
import { router } from 'expo-router'; 
import Botao from '../../components/Botao'; 

// --- COMPONENTE ENTRADA DE TEXTO INTEGRADO ---
type InputProps = TextInputProps & {
    placeholder?: string;
    placeholderTextColor?: string;
    value?: string;
}

function EntradaTextoLocal({ style, ...rest }: InputProps) {
    return (
        <TextInput
            style={[styles.inputPadraoComponente, style]}
            {...rest}
        />
    )
}

// --- TELA PRINCIPAL ---
export default function Cadastro_Contato() { 
  const [nome, setNome] = useState(''); 
  const [telefone, setTelefone] = useState(''); 
  const [mensagem, setMensagem] = useState(''); 
  const [count, Setcount] = useState(0); 

  function contador (){ 
    Setcount(val => val + 10); 
  } 

  function contadorf (){ 
    Setcount(val => val - 10); 
  } 

  function zerar() { 
    Setcount(0); 
  } 

  function handleSalvar() { 
    if (!nome || nome.trim() === '') {
      alert('Por favor, digite um nome antes de salvar.');
      return;
    }
    setMensagem(`Olá, ${nome.trim()}! Seja bem-vindo!`); 
  } 

  function handleCancelar() { 
    setNome(''); 
    setTelefone(''); 
    setMensagem(''); 
  } 

  return ( 
    <SafeAreaView style={styles.container}> 
      <StatusBar style="light" /> 
      <View style={styles.header}> 
        <Text style={styles.headerText}>Atividade 1</Text> 
      </View> 

      <ScrollView contentContainerStyle={styles.scroll}> 
        <Text style={styles.title}>Cadastro de Contato</Text> 
        <Text style={styles.subtitle}>Preencha os campos abaixo.</Text> 

        <Text style={styles.label}>Nome</Text> 
        <EntradaTextoLocal 
          placeholder="Digite seu nome" 
          placeholderTextColor="#aaa" 
          value={nome} 
          onChangeText={(texto) => setNome(texto)} 
          style={styles.input} 
        /> 

        <Text style={styles.label}>Telefone</Text> 
        <EntradaTextoLocal 
          placeholder="Digite seu telefone" 
          placeholderTextColor="#aaa" 
          keyboardType="phone-pad" 
          value={telefone} 
          onChangeText={(texto) => setTelefone(texto)} 
          style={styles.input} 
        /> 

        <Botao 
          titulo="SALVAR CONTATO" 
          cor="#3F2FBF" 
          onPress={handleSalvar} 
          style={styles.botaoSalvar} 
        /> 

        {/* MENSAGEM EXIBIDA NA TELA APÓS CLICAR EM SALVAR */}
        {mensagem !== '' && (
          <View style={styles.containerMensagem}>
            <Text style={styles.mensagemBoasVindas}>
              {mensagem}
            </Text>
          </View>
        )}

        <TouchableOpacity onPress={() => router.push('/Cadastro_Cliente')}> 
          <Text style={styles.link}>fazer cadastro</Text> 
        </TouchableOpacity> 

        <Botao titulo='contador' cor='green' onPress={contador} /> 
        <Botao titulo='contador -' cor='red' onPress={contadorf} /> 
        <Botao titulo='zerar -' cor='red' onPress={zerar} /> 

        <Text style={{ textAlign: 'center', fontSize: 18, marginVertical: 10, color: '#333' }}> 
          Valor atual: {count} 
        </Text> 

        <Botao 
          titulo="CANCELAR" 
          cor="#ffffff" 
          corTexto="#3F2FBF" 
          onPress={handleCancelar} 
          style={styles.botaoCancelar} 
        /> 
      </ScrollView> 
    </SafeAreaView> 
  ); 
} 

// --- ESTILOS ---
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: '#ffffff', 
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
  scroll: { 
    padding: 24, 
    paddingBottom: 40, 
  }, 
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#3F2FBF', 
    marginTop: 16, 
    marginBottom: 6, 
  }, 
  subtitle: { 
    fontSize: 14, 
    color: '#555', 
    marginBottom: 24, 
  }, 
  label: { 
    fontSize: 15, 
    fontWeight: '600', 
    color: '#222', 
    marginBottom: 6, 
    marginTop: 12, 
  }, 
  inputPadraoComponente: {
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 8, 
    padding: 14, 
    fontSize: 15, 
    color: '#333', 
    backgroundColor: '#fff',
  },
  input: { 
    borderColor: '#ccc', 
  }, 
  botaoSalvar: { 
    marginTop: 32, 
    borderRadius: 8, 
    height: 52, 
  }, 
  botaoCancelar: { 
    marginTop: 16, 
    borderRadius: 8, 
    height: 52, 
    borderWidth: 1, 
    borderColor: '#3F2FBF', 
  }, 
  link: { 
    color: '#3F2FBF', 
    fontSize: 15, 
    fontWeight: '600', 
    textAlign: 'center', 
    textDecorationLine: 'underline', 
    marginTop: 20, 
    marginBottom: 10, 
  }, 
  containerMensagem: {
    backgroundColor: '#f0eefc',
    padding: 16,
    borderRadius: 8,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#3F2FBF',
  },
  mensagemBoasVindas: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3F2FBF',
    textAlign: 'center',
  },
});
