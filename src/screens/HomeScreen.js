import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  ScrollView,
  Platform,
  ImageBackground,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

// Função para calcular dimensões responsivas
const getResponsiveSize = (baseSize, minSize = 8) => {
  const scale = Math.min(width / 375, height / 667); // Baseado no iPhone 6/7/8
  return Math.max(baseSize * scale, minSize);
};

// Função para calcular dimensões baseadas na largura
const getWidthBasedSize = (percentage) => {
  return Math.max(width * percentage, 8);
};

// Função para calcular dimensões baseadas na altura
const getHeightBasedSize = (percentage) => {
  return Math.max(height * percentage, 8);
};

export default function HomeScreen({ onLogout, onStart }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      {/* Background com imagem */}
      <ImageBackground
        source={require('../../assets/COMEÇAR-3.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Overlay escuro para melhorar legibilidade */}
        <View style={styles.overlay} />
        
        {/* Estrelas decorativas */}
        {[...Array(50)].map((_, i) => (
          <View
            key={i}
            style={[
              styles.star,
              {
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2,
              },
            ]}
          />
        ))}
        
        {/* Partículas cósmicas adicionais */}
        {[...Array(20)].map((_, i) => (
          <View
            key={`particle-${i}`}
            style={[
              styles.cosmicParticle,
              {
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.6 + 0.3,
              },
            ]}
          />
        ))}

        {/* Header com menu e recursos */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuIcon} activeOpacity={0.8}>
            <Ionicons name="menu" size={getResponsiveSize(28, 22)} color="#ffffff" />
          </TouchableOpacity>

          <View style={styles.resourcesContainer}>
            <LinearGradient colors={["#FF9A9E", "#FAD0C4"]} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.badgeGradient}>
              <View style={styles.badgeIconWrap}>
                <Image source={require('../assets/imagens/flor.png')} style={styles.badgeIconImage} resizeMode="contain" />
              </View>
              <Text style={styles.badgeText}>5</Text>
            </LinearGradient>

            <LinearGradient colors={["#89F7FE", "#66A6FF"]} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.badgeGradient}>
              <View style={styles.badgeIconWrap}>
                <Image source={require('../assets/imagens/semente.png')} style={styles.badgeIconImage} resizeMode="contain" />
              </View>
              <Text style={styles.badgeText}>18</Text>
            </LinearGradient>

            <TouchableOpacity style={styles.avatarButton} onPress={onLogout} activeOpacity={0.85}>
              <LinearGradient colors={["#FFD3A5", "#FD6585"]} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.avatarGradient}>
                <View style={styles.avatarInner}>
                  <Ionicons name="person" size={getResponsiveSize(18, 14)} color="#1A1A1A" />
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        {/* Conteúdo principal em layout horizontal */}
        <View style={styles.mainContent}>
          {/* Logo ARANDU */}
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>ARANDU</Text>
            <View style={styles.logoAccent} />
          </View>

          {/* Botões principais */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.startButton} activeOpacity={0.8} onPress={onStart}>
              <Text style={styles.buttonText}>INICIAR</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.marketButton} activeOpacity={0.8}>
              <Text style={styles.buttonText}>MERCADO INTERGALÁCTICO</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContent: {
    flexGrow: 1,
    minHeight: Platform.OS === 'web' ? '100vh' : height,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  star: {
    position: 'absolute',
    width: getResponsiveSize(2, 1),
    height: getResponsiveSize(2, 1),
    backgroundColor: '#fff',
    borderRadius: getResponsiveSize(1, 0.5),
  },
  cosmicParticle: {
    position: 'absolute',
    width: getResponsiveSize(3, 2),
    height: getResponsiveSize(3, 2),
    backgroundColor: '#ff00ff',
    borderRadius: getResponsiveSize(1.5, 1),
    shadowColor: '#ff00ff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: getResponsiveSize(3, 2),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: getHeightBasedSize(0.03),
    paddingHorizontal: getWidthBasedSize(0.02),
    paddingBottom: getHeightBasedSize(0.015),
    zIndex: 10,
  },
  menuButton: {
    padding: getResponsiveSize(10, 8),
  },
  menuIcon: {
    padding: getResponsiveSize(8, 6),
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: getResponsiveSize(12, 10),
  },
  menuLine: {
    width: getResponsiveSize(25, 20),
    height: getResponsiveSize(3, 2),
    backgroundColor: '#fff',
    marginVertical: getResponsiveSize(2, 1),
    borderRadius: getResponsiveSize(2, 1),
  },
  resourcesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: getResponsiveSize(10, 8),
  },
  badgeGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: getResponsiveSize(6, 4),
    paddingHorizontal: getResponsiveSize(10, 8),
    borderRadius: getResponsiveSize(20, 16),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: getResponsiveSize(2, 1) },
    shadowOpacity: 0.2,
    shadowRadius: getResponsiveSize(5, 3),
    gap: getResponsiveSize(6, 4),
  },
  badgeIconWrap: {
    width: getResponsiveSize(22, 18),
    height: getResponsiveSize(22, 18),
    borderRadius: getResponsiveSize(11, 9),
    backgroundColor: 'rgba(255,255,255,0.75)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#1A1A1A',
    fontWeight: '800',
    fontSize: getResponsiveSize(16, 12),
  },
  badgeIconImage: {
    width: '80%',
    height: '80%',
  },
  avatarButton: {
    borderRadius: getResponsiveSize(20, 16),
    overflow: 'hidden',
  },
  avatarGradient: {
    padding: getResponsiveSize(2, 2),
    borderRadius: getResponsiveSize(20, 16),
  },
  avatarInner: {
    width: getResponsiveSize(36, 28),
    height: getResponsiveSize(36, 28),
    borderRadius: getResponsiveSize(18, 14),
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: getWidthBasedSize(0.03),
    paddingVertical: getHeightBasedSize(0.03),
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: getHeightBasedSize(0.04),
  },
  logoText: {
    fontSize: getResponsiveSize(42, 28),
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: getResponsiveSize(4, 2),
    textShadowColor: 'rgba(255, 255, 255, 0.3)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: getResponsiveSize(10, 5),
    textAlign: 'center',
  },
  logoAccent: {
    width: getResponsiveSize(40, 30),
    height: getResponsiveSize(4, 3),
    backgroundColor: '#fff',
    marginTop: getResponsiveSize(-10, -8),
    marginLeft: getResponsiveSize(80, 60),
    borderRadius: getResponsiveSize(2, 1),
  },
  buttonsContainer: {
    width: '100%',
    maxWidth: Platform.OS === 'web' ? 640 : Math.min(480, width * 0.75),
    gap: getHeightBasedSize(0.018),
  },
  startButton: {
    backgroundColor: '#FF007F',
    paddingVertical: getHeightBasedSize(0.018),
    paddingHorizontal: getWidthBasedSize(0.07),
    borderRadius: getResponsiveSize(25, 20),
    alignItems: 'center',
    shadowColor: '#FF007F',
    shadowOffset: { width: 0, height: getResponsiveSize(4, 2) },
    shadowOpacity: 0.3,
    shadowRadius: getResponsiveSize(8, 4),
    elevation: 3,
  },
  marketButton: {
    backgroundColor: '#007B8C',
    paddingVertical: getHeightBasedSize(0.018),
    paddingHorizontal: getWidthBasedSize(0.07),
    borderRadius: getResponsiveSize(25, 20),
    alignItems: 'center',
    shadowColor: '#007B8C',
    shadowOffset: { width: 0, height: getResponsiveSize(4, 2) },
    shadowOpacity: 0.3,
    shadowRadius: getResponsiveSize(8, 4),
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: getResponsiveSize(20, 16),
    fontWeight: 'bold',
    letterSpacing: getResponsiveSize(1, 0.5),
    textAlign: 'center',
  },
});