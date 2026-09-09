import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 26,
    borderRadius: 20,
    // Sombra exterior difusa con el color ámbar de la paleta
    shadowColor: '#F59E0B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.45,
    shadowRadius: 12,
    elevation: 8,
  },
  gradientBorder: {
    padding: 1.8, // Grosor del contorno luminoso
    borderRadius: 20,
  },
  innerCore: {
    backgroundColor: '#1E172E', // Núcleo carbón violeta oscuro
    borderRadius: 18.2,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
});