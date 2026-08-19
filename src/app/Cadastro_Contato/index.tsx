import { use, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import Botao from '../../components/Botao';
import EntradaTexto from '../../components/EntradaTexto';

export default function Cadastro_Contato() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
const [count, Setcount] = useState(0);

function contador (){
    Setcount(val =>val +10);
}
function contadorf (){
    Setcount(val =>val - 10);
}

  function zerar() { 
    Setcount (0); 
  }



    function handleSalvar() {
        alert('Contato salvo com sucesso!');
    }

    function handleCancelar() {
        setNome('');
        setTelefone('');
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Atividade 1</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scroll}>
                <Text style={styles.title}>Cadastro de Contato</Text>
                <Text style={styles.subtitle}>Preencha os campos abaixo.</Text>

                <Text style={styles.label}>Nome</Text>
                <EntradaTexto
                    placeholder="Digite seu nome"
                    placeholderTextColor="#aaa"
                    value={nome}
                    onChangeText={setNome}
                    style={styles.input}
                />

                <Text style={styles.label}>Telefone</Text>
                <EntradaTexto
                    placeholder="Digite seu telefone"
                    placeholderTextColor="#aaa"
                    keyboardType="phone-pad"
                    value={telefone}
                    onChangeText={setTelefone}
                    style={styles.input}
                />

                <Botao
                    titulo="SALVAR CONTATO"
                    cor="#3F2FBF"
                    onPress={handleSalvar}
                    style={styles.botaoSalvar}
                />

                <TouchableOpacity onPress={() => router.push('/Cadastro_Cliente')}>
                    <Text style={styles.link}>fazer cadastro</Text>
                </TouchableOpacity>

                <Botao titulo='contador' cor='green' onPress={contador} />
                <Botao titulo='contador -' cor='red' onPress={contadorf} />
                 <Botao titulo='zerar -' cor='red' onPress={zerar} />
                <Text style={{ textAlign: 'center', fontSize: 18, marginVertical: 10 }}>
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
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 14,
        fontSize: 15,
        color: '#333',
        backgroundColor: '#fff',
    },
    botaoSalvar: {
        marginTop: 32,
        borderRadius: 8,
        height: 52,
    },
    botaoCancelar: {
        marginTop: 8,
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
        marginTop: 14,
        marginBottom: 4,
    },
});
