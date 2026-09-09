import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

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
        <AlumnoPage
          usuario={usuario}
          setPage={setPage}
        />
      );

    case 'profesor':
      return (
        <ProfesorPage
          usuario={usuario}
          setPage={setPage}
        />
      );

    case 'padre':
      return (
        <PadrePage
          usuario={usuario}
          setPage={setPage}
        />
      );

    default:
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <Login onLogin={handleLogin} />
        </SafeAreaView>
      );
  }
}
