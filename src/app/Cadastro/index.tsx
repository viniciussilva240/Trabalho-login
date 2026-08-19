import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/Cadastro';
import { router } from 'expo-router';

export default function Cadastro() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <View style={styles.content}>
                    <Text style={styles.title}>Cadastro</Text>
                    <Text style={styles.subtitle}>Tela de Cadastro</Text>
                    
                    <Text style={styles.label}>Nome:</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Digite seu nome"
                        placeholderTextColor="#A78BFA80"
                    />
                    
                    <Text style={styles.label}>Email:</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Digite seu email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholderTextColor="#A78BFA80"
                    />
                    
                    <Text style={styles.label}>Senha:</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Digite sua senha"
                        secureTextEntry
                        placeholderTextColor="#A78BFA80"
                    />

                    <Text style={styles.label}>Repetir Senha:</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Repita sua senha"
                        secureTextEntry
                        placeholderTextColor="#A78BFA80"
                    />
                    
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button1}
                            onPress={() => alert("Cadastro efetuado com sucesso!")}
                        >
                            <Text style={styles.buttonText}>Confirmar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button2}
                            onPress={() => router.push('/Home')}
                        >
                            <Text style={styles.buttonTextSecondary}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

