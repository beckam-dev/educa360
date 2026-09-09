import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

import { padreHijo } from '../data/relaciones';
import { alumnos } from '../data/alumnos';

export default function PadrePage({ usuario, setPage }) {

  const relaciones = padreHijo.filter(
    (relacion) =>
      relacion.padreId === usuario.personaId
  );

  const hijos = relaciones
    .map((relacion) =>
      alumnos.find(
        (alumno) => alumno.id === relacion.alumnoId
      )
    )
    .filter(Boolean);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Portal del Padre
      </Text>

      <Text style={styles.welcome}>
        Bienvenido, {usuario.nombre}
      </Text>

      <Text style={styles.subtitle}>
        Mis hijos
      </Text>

      {hijos.map((hijo) => (
        <View
          key={hijo.id}
          style={styles.card}
        >
          <Text style={styles.name}>
            {hijo.nombre}
          </Text>

          <Text>
            Grado: {hijo.grado}
          </Text>

          <Text>
            Sección: {hijo.seccion}
          </Text>
        </View>
      ))}

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
    padding: 20,
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  welcome: {
    fontSize: 18,
    marginBottom: 30,
  },

  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
