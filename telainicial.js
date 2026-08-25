import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Logo ou Imagem do Foguete Comercial (Nova Imagem) */}
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1517976384346-3136801d605d?q=80&w=400&auto=format&fit=crop' }} 
        style={styles.logo} 
        // Adicionei um efeito de sombra sutil para destacar a imagem no fundo escuro
        resizeMode="cover" 
      />

      {/* Nome do Aplicativo */}
      <Text style={styles.titulo}>OrbitSpace</Text>

      {/* Subtítulo / Slogan (Atualizado para o tema Foguete) */}
      <Text style={styles.slogan}>Sua Carona Para a Órbita</Text>

      {/* Rodapé com versão e nome */}
      <Text style={styles.rodape}>v1.0 - Seu Nome Aqui</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0d19', // Azul bem escuro (espaço sideral)
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 140, // Aumentei um pouco o tamanho
    height: 140,
    borderRadius: 70, // Manteve redonda, mas um pouco maior
    marginBottom: 25,
    borderWidth: 3, // Borda mais grossa
    borderColor: '#00d2ff', // Cor de borda mais "ciber"
    shadowColor: '#00d2ff', // Cor do brilho da sombra
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    // Nota: elevation é necessário para sombra no Android, mas não é necessário para a imagem em si no Snack, a borda azul já resolve.
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'center',
  },
  slogan: {
    fontSize: 16,
    color: '#a0aec0',
    textAlign: 'center',
    marginBottom: 50,
  },
  rodape: {
    fontSize: 12,
    color: '#718096',
    position: 'absolute',
    bottom: 30,
  },
});
