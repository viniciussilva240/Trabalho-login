import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View,  } from 'react-native';
import { styles } from '../../styles/Home';
import { router } from 'expo-router';
import Botao from '../../components/Botao';

export default function Home() {
  return (

    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.content}>
        <Text style={styles.title}>Hub Central</Text>
        <Text style={styles.subtitle}>Escolha para onde deseja ir</Text>
        
        <View style={styles.buttonContainer}>
          <Botao
            titulo="Login"
            cor="#f65c5c"
            style={styles.hubButton}
            estiloTexto={styles.hubButtonText}
            onPress={() => router.push('/Tela_Login')}
          />
          <Botao
            titulo="Cadastro Aluno"
            cor="#000000"
            style={styles.hubButton}
            estiloTexto={styles.hubButtonText}
            onPress={() => router.push('/Cadastro_Aluno')}
          />
          <Botao
            titulo="Atualizar Contato"
            cor="#ffffff"
            style={styles.hubButton}
            estiloTexto={styles.hubButtonText}
            onPress={() => router.push('/Cadastro_Contato')}
          />
          <Botao
            titulo="Cadastro Geral"
            cor="#8B5CF6"
            style={styles.hubButton}
            estiloTexto={styles.hubButtonText}
            onPress={() => router.push('/Cadastro')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
