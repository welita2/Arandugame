import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const AranduLoginScreen = ({ onLogin }) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    console.log('Login:', { usuario, senha });
    
    // Dados mockados para login
    if (usuario === 'admin' && senha === 'admin') {
      console.log('Login bem-sucedido!');
      onLogin(); // Chama a função de login passada como prop
    } else {
      console.log('Credenciais inválidas!');
      alert('Usuário ou senha incorretos!');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* Menu Hamburger */}
        <TouchableOpacity style={styles.menuButton}>
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
        </TouchableOpacity>

        {/* Decorações Espaciais */}
        <View style={styles.decorPlanet}>
          <View style={styles.planet} />
          <View style={styles.ring} />
        </View>

        <View style={styles.decorComet} />
        <View style={styles.decorEarth} />

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>ARANDU</Text>
          <View style={styles.logoAccent} />
        </View>

        {/* Formulário */}
        <View style={styles.formContainer}>
          <Text style={styles.label}>Usuário:</Text>
          <TextInput
            style={styles.input}
            value={usuario}
            onChangeText={setUsuario}
            placeholder=""
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Senha:</Text>
          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
            placeholder=""
            placeholderTextColor="#999"
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#E91E63', '#C2185B']}
              style={styles.buttonGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.buttonText}>ENTRAR</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Estrelas decorativas */}
        {[...Array(20)].map((_, i) => (
          <View
            key={i}
            style={[
              styles.star,
              {
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
              },
            ]}
          />
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(10, 20, 40, 0.85)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  menuButton: {
    position: 'absolute',
    top: 50,
    left: 30,
    zIndex: 10,
  },
  menuLine: {
    width: 35,
    height: 3,
    backgroundColor: '#fff',
    marginVertical: 4,
    borderRadius: 2,
  },
  decorPlanet: {
    position: 'absolute',
    top: 30,
    left: width * 0.3,
  },
  planet: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E91E63',
    shadowColor: '#E91E63',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 15,
  },
  ring: {
    position: 'absolute',
    width: 120,
    height: 30,
    borderRadius: 60,
    borderWidth: 8,
    borderColor: '#FFB74D',
    top: 25,
    left: -20,
    transform: [{ rotateX: '70deg' }],
  },
  decorComet: {
    position: 'absolute',
    top: 80,
    right: 50,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FF7043',
    shadowColor: '#FF7043',
    shadowOffset: { width: -30, height: -30 },
    shadowOpacity: 0.8,
    shadowRadius: 30,
  },
  decorEarth: {
    position: 'absolute',
    bottom: 100,
    right: 30,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#4FC3F7',
    borderWidth: 2,
    borderColor: '#81C784',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  logoText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 4,
    textShadowColor: 'rgba(255, 255, 255, 0.3)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  logoAccent: {
    width: 40,
    height: 4,
    backgroundColor: '#fff',
    marginTop: -10,
    marginLeft: 100,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    marginTop: 15,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 25,
    paddingHorizontal: 25,
    paddingVertical: 15,
    fontSize: 16,
    color: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  button: {
    marginTop: 30,
    borderRadius: 30,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#E91E63',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  buttonGradient: {
    paddingVertical: 18,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  star: {
    position: 'absolute',
    width: 2,
    height: 2,
    backgroundColor: '#fff',
    borderRadius: 1,
  },
});

export default AranduLoginScreen;