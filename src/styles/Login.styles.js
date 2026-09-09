import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#120E1C', // Fondo noche morado profundo
    justifyContent: 'center',
  },
  ambientGlow: {
    position: 'absolute',
    top: -90,
    alignSelf: 'center',
    width: 340,
    height: 340,
    borderRadius: 170,
    backgroundColor: '#6D28D9',
    opacity: 0.16,
  },
  content: {
    paddingHorizontal: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  badgePill: {
    backgroundColor: '#261F38',
    borderColor: '#4338CA',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 12,
  },
  badgePillText: {
    color: '#F59E0B',
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.4,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#F8FAFC',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 13,
    color: '#9E97B3',
    marginTop: 6,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#1C162B',
    borderColor: '#2D2445',
    borderWidth: 1,
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 18,
    elevation: 8,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#C4BFD6',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#140F21',
    borderWidth: 1,
    borderColor: '#2D2445',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 13,
    fontSize: 14,
    color: '#FFFFFF',
  },
  inputFocused: {
    borderColor: '#8B5CF6',
    backgroundColor: '#181229',
  },
  inputError: {
    borderColor: '#F43F5E',
    backgroundColor: '#23121D',
  },
  errorText: {
    color: '#FB7185',
    fontSize: 11,
    marginTop: 5,
    fontWeight: '500',
  },
  helpButton: {
    marginTop: 18,
    alignItems: 'center',
  },
  helpText: {
    color: '#8A829E',
    fontSize: 12,
  },
});