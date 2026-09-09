import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';

import { usuarios } from '../data/usuarios';

export default function Login({ onLogin }) {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const usuarioEncontrado = usuarios.find(
      (u) =>
        u.usuario === usuario &&
        u.password === password
    );

    if (usuarioEncontrado) {
      onLogin(usuarioEncontrado);
    } else {
      Alert.alert(
        'Error',
        'Usuario o contraseña incorrectos'
      );
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Iniciar sesión
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button
        title="Ingresar"
        onPress={handleLogin}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
});
