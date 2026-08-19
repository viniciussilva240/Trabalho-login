import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import Botao from '../../components/Botao';
import EntradaTexto from '../../components/EntradaTexto';

export default function Cadastro_Cliente() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');

    function handleSalvar() {
        alert('Cliente salvo com sucesso!');
    }

    function handleLimpar() {
        setNome('');
        setEmail('');
        setTelefone('');
        setEndereco('');
        setCidade('');
        setCep('');
    }

    function handleCancelar() {
        router.push('/Cadastro_Contato');
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Atividade 2</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scroll}>
                <Text style={styles.title}>Cadastro de Cliente</Text>
                <Text style={styles.subtitle}>Preencha todos os campos abaixo.</Text>

                <Text style={styles.label}>Nome completo</Text>
                <EntradaTexto
                    placeholder="Digite seu nome completo"
                    placeholderTextColor="#aaa"
                    value={nome}
                    onChangeText={setNome}
                    style={styles.input}
                />

                <Text style={styles.label}>E-mail</Text>
                <EntradaTexto
                    placeholder="Digite seu e-mail"
                    placeholderTextColor="#aaa"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
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

                <Text style={styles.label}>Endereço</Text>
                <EntradaTexto
                    placeholder="Digite seu endereço"
                    placeholderTextColor="#aaa"
                    value={endereco}
                    onChangeText={setEndereco}
                    style={styles.input}
                />

                <Text style={styles.label}>Cidade</Text>
                <EntradaTexto
                    placeholder="Digite sua cidade"
                    placeholderTextColor="#aaa"
                    value={cidade}
                    onChangeText={setCidade}
                    style={styles.input}
                />

                <Text style={styles.label}>CEP</Text>
                <EntradaTexto
                    placeholder="Digite seu CEP"
                    placeholderTextColor="#aaa"
                    keyboardType="numeric"
                    value={cep}
                    onChangeText={setCep}
                    style={styles.input}
                />

                <View style={styles.botoesContainer}>
                    <Botao
                        titulo="SALVAR"
                        cor="#1a3fcc"
                        onPress={handleSalvar}
                        style={styles.botao}
                    />
                    <Botao
                        titulo="LIMPAR"
                        cor="#28a745"
                        onPress={handleLimpar}
                        style={styles.botao}
                    />
                    <Botao
                        titulo="CANCELAR"
                        cor="#dc3545"
                        onPress={handleCancelar}
                        style={styles.botao}
                    />
                </View>
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
        backgroundColor: '#1a3fcc',
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
        color: '#1a3fcc',
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
    botoesContainer: {
        marginTop: 32,
        gap: 10,
    },
    botao: {
        borderRadius: 8,
        height: 52,
        marginTop: 0,
        marginBottom: 0,
    },
});
