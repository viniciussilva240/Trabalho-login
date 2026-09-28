import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const { width, height } = Dimensions.get('window');

export default function AdegaInicio() {
  return (
    <View style={styles.root}>
      <StatusBar style="light" hidden />
      <ImageBackground
        source={require('../../../assets/vinhos/backgound.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <View style={styles.textoCentro}>
          <Text style={styles.titulo}>Adega Preferida</Text>
          <Text style={styles.subtitulo}>
            Aqui você encontra os melhores e mais{'\n'}saborosos vinhos.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width,
    height,
    backgroundColor: '#000',
  },
  background: {
    width,
    height,
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  textoCentro: {
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  titulo: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitulo: {
    color: '#eee',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});
