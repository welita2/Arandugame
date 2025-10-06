import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, useWindowDimensions, Platform, StatusBar } from 'react-native';
import { Video } from 'expo-av';

const VIDEO_SRC = require('../assets/videos/fogo.mp4');

export default function VideoScreen({ onBack }) {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const videoMaxWidth = width;
  const videoMaxHeight = height;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={[styles.videoWrap, { width: videoMaxWidth, height: videoMaxHeight }]}>
        <Video
          source={VIDEO_SRC}
          style={styles.video}
          useNativeControls
          shouldPlay
          resizeMode="cover"
          isLooping={false}
        />
      </View>
      {onBack ? (
        <TouchableOpacity style={styles.back} onPress={onBack} activeOpacity={0.85}>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' },
  videoWrap: { alignItems: 'center', justifyContent: 'center' },
  video: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  back: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
  },
  backText: { color: '#fff', fontWeight: 'bold' },
});


