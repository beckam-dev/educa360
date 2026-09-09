import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import Login from './src/pages/Login';
import AlumnoPage from './src/pages/AlumnoPage';
import ProfesorPage from './src/pages/ProfesorPage';
import PadrePage from './src/pages/PadrePage';

export default function App() {
  const [page, setPage] = useState('login');
  const [usuario, setUsuario] = useState(null);

  const handleLogin = (usuarioEncontrado) => {
    setUsuario(usuarioEncontrado);
    setPage(usuarioEncontrado.rol);
  };

  switch (page) {
    case 'alumno':
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
          <AlumnoPage
            usuario={usuario}
            setPage={setPage}
          />
        </SafeAreaView>
      );

    case 'profesor':
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
          <ProfesorPage
            usuario={usuario}
            setPage={setPage}
          />
        </SafeAreaView>
      );

    case 'padre':
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
          <PadrePage
            usuario={usuario}
            setPage={setPage}
          />
        </SafeAreaView>
      );

    default:
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
          <Login onLogin={handleLogin} />
        </SafeAreaView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC', // Fondo claro institucional de la paleta
  },
});