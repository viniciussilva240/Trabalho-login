import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View,  } from 'react-native';
import { styles } from '../../styles/Tela_Login';
import { router } from 'expo-router';
import Botao from '../../components/Botao';
import EntradaTexto from '../../components/EntradaTexto';

export default function Tela_Login() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.content}>
        <Text style={styles.title}>Atividade 03</Text>
        <Text style={styles.subtitle}>Tela de Login</Text>
        
        <Text style={styles.label}>Email:</Text>
        <EntradaTexto 
          style={styles.input} 
          placeholder="Digite seu email"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#999"
        />
        
        <Text style={styles.label}>Senha:</Text>
        <EntradaTexto 
          style={styles.input} 
          placeholder="Digite sua senha"
          secureTextEntry
          placeholderTextColor="#999"
        />

        <View style={styles.buttonContainer}>
          <Botao
            titulo="Confirmar"
            cor="#8B5CF6"
            style={styles.button1}
            onPress={() => {
              alert("Login efetuado com sucesso!");
              router.push('/Home');
            }}
          />
          <Botao
            titulo="Voltar"
            cor="#261438"
            corTexto="#C4B5FD"
            style={styles.button2}
            onPress={() => router.push('/Home')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
