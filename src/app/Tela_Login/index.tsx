import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import { styles } from '../../styles/Tela_Login';
import { router } from 'expo-router';
import Botao from '../../components/Botao';
import EntradaTexto from '../../components/EntradaTexto';
import { useAuth } from '../../context/AuthContext';

export default function Tela_Login() {
  const { logar } = useAuth();

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [erro, setErro] = useState('');

  function handleLogin() {
    if (!nome.trim() || !telefone.trim()) {
      setErro('Preencha o nome e o telefone.');
      return;
    }

    const sucesso = logar(nome, telefone);

    if (sucesso) {
      setErro('');
      alert('Login efetuado com sucesso!');
      router.push('/Home');
    } else {
      setErro('Credenciais inválidas. Cadastre-se primeiro.');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.content}>
        <Text style={styles.title}>Atividade 03</Text>
        <Text style={styles.subtitle}>Tela de Login</Text>

        <Text style={styles.label}>Nome:</Text>
        <EntradaTexto
          style={styles.input}
          placeholder="Digite seu nome"
          autoCapitalize="words"
          placeholderTextColor="#999"
          value={nome}
          onChangeText={text => { setNome(text); setErro(''); }}
        />

        <Text style={styles.label}>Telefone:</Text>
        <EntradaTexto
          style={styles.input}
          placeholder="Digite seu telefone"
          keyboardType="phone-pad"
          placeholderTextColor="#999"
          value={telefone}
          onChangeText={text => { setTelefone(text); setErro(''); }}
        />

        {erro !== '' && (
          <Text style={styles.erro}>{erro}</Text>
        )}

        <View style={styles.buttonContainer}>
          <Botao
            titulo="Confirmar"
            cor="#8B5CF6"
            style={styles.button1}
            onPress={handleLogin}
          />
          <Botao
            titulo="Voltar"
            cor="#261438"
            corTexto="#C4B5FD"
            style={styles.button2}
            onPress={() => router.push('/Cadastro_Contato')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
