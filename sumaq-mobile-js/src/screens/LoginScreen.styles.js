import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5EBD8'
  },

  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 30
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 30
  },

  logo: {
    width: 125,
    height: 125,
    marginBottom: 10
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#543B2B',
    letterSpacing: 2
  },

  subtitle: {
    fontSize: 13,
    color: '#806A57',
    marginTop: 6
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 20,
    elevation: 4
  },

  welcome: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#543B2B'
  },

  description: {
    color: '#806A57',
    marginTop: 5,
    marginBottom: 25
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#543B2B',
    marginBottom: 8,
    marginTop: 12
  },

  input: {
    borderWidth: 1,
    borderColor: '#D8C9B5',
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
    color: '#543B2B'
  },

  button: {
    backgroundColor: '#704A32',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 28
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15
  },

  footer: {
    textAlign: 'center',
    color: '#806A57',
    fontSize: 11,
    marginTop: 25
  }
});