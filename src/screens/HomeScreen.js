import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function HomeScreen({ onLogout }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      {/* Background cósmico */}
      <LinearGradient
        colors={['#000080', '#800080', '#FF00FF', '#FFA500', '#FFFF00']}
        style={styles.backgroundGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      
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

      {/* Header com menu e recursos */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
        </TouchableOpacity>
        
        <View style={styles.resourcesContainer}>
          <View style={styles.resourcePill}>
            <Text style={styles.resourceText}>5</Text>
            <Text style={styles.resourceIcon}>🌸</Text>
          </View>
          <View style={styles.resourcePill}>
            <Text style={styles.resourceText}>18</Text>
            <Text style={styles.resourceIcon}>☕</Text>
          </View>
          <TouchableOpacity style={styles.profileIcon} onPress={onLogout}>
            <Text style={styles.profileText}>👤</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Logo ARANDU centralizado */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>ARANDU</Text>
        <View style={styles.logoAccent} />
      </View>

      {/* Botões principais */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.startButton} activeOpacity={0.8}>
          <Text style={styles.buttonText}>INICIAR</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.marketButton} activeOpacity={0.8}>
          <Text style={styles.buttonText}>MERCADO INTERGALÁCTICO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  star: {
    position: 'absolute',
    width: 2,
    height: 2,
    backgroundColor: '#fff',
    borderRadius: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  menuButton: {
    padding: 10,
  },
  menuLine: {
    width: 25,
    height: 3,
    backgroundColor: '#fff',
    marginVertical: 2,
    borderRadius: 2,
  },
  resourcesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  resourcePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 5,
  },
  resourceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  resourceIcon: {
    fontSize: 16,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    fontSize: 20,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
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
    borderRadius: 2,
  },
  buttonsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 60,
    gap: 20,
  },
  startButton: {
    backgroundColor: '#FF007F',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#FF007F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  marketButton: {
    backgroundColor: '#007B8C',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#007B8C',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});