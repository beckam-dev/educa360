import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

import { alumnos } from '../data/alumnos';

export default function AlumnoPage({ usuario, setPage }) {

  const alumno = alumnos.find(
    (a) => a.id === usuario.personaId
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Portal del Alumno
      </Text>

      <Text style={styles.text}>
        Bienvenido, {alumno?.nombre}
      </Text>

      <Text style={styles.text}>
        Grado: {alumno?.grado}
      </Text>

      <Text style={styles.text}>
        Sección: {alumno?.seccion}
      </Text>

      <Button
        title="Cerrar sesión"
        onPress={() => setPage('login')}
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
  },

  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
