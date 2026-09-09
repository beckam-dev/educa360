import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  SafeAreaView, 
  StyleSheet, 
} from 'react-native';
import Login from './src/screens/Login';

export default function App() {

  const [page, setPage] = useState('login');
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setPage(userData.rol);
  }

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
        <SafeAreaView>
          <Login onLogin={handleLogin} />
        </SafeAreaView>
      );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
