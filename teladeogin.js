import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

export default function LoginScreen({ aoMudarParaCadastro }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        
        {/* Header com a logo do app */}
        <View style={styles.header}>
          <Text style={styles.logo}>🚀 Estação Orbital</Text>
        </View>

        <Text style={styles.titulo}>Login do Tripulante</Text>

        {/* Pelo menos dois campos de texto */}
        <TextInput
          style={styles.input}
          placeholder="E-mail orbital"
          placeholderTextColor="#8b949e"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha de acesso"
          placeholderTextColor="#8b949e"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        {/* Botão de envio com acesso aceito */}
        <TouchableOpacity 
          style={styles.botao} 
          onPress={() => alert('Acesso Concedido! Bem-vindo a bordo da Estação Espacial Comercial.')}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>

        {/* Textos pressionáveis */}
        <TouchableOpacity onPress={() => alert('Instruções de recuperação enviadas para o seu e-mail.')}>
          <Text style={styles.linkText}>Esqueci a senha</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={aoMudarParaCadastro}>
          <Text style={styles.linkTextAlt}>Não tem uma conta? Criar conta</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0f19',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '85%',
    backgroundColor: '#161b22',
    padding: 25,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  header: {
    marginBottom: 15,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#58a6ff',
  },
  titulo: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 20,
    fontWeight: '600',
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: '#0d1117',
    borderWidth: 1,
    borderColor: '#30363d',
    borderRadius: 8,
    paddingHorizontal: 15,
    color: '#fff',
    marginBottom: 15,
  },
  botao: {
    width: '100%',
    height: 45,
    backgroundColor: '#238636',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 15,
  },
  textoBotao: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  linkText: {
    color: '#58a6ff',
    marginTop: 8,
    fontSize: 14,
  },
  linkTextAlt: {
    color: '#8b949e',
    marginTop: 12,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
