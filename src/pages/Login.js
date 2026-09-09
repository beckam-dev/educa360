import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Image,
  Alert,
} from 'react-native';
import CosmicButton from '../components/ui/CosmicButton';
import { styles } from '../styles/Login.styles';
import { usuarios } from '../data/usuarios';

export default function Login({ onLogin }) {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isUserFocused, setIsUserFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  // Validación individual por campo
  const validateField = (field, value) => {
    let errorMsg = null;

    if (field === 'usuario') {
      if (!value.trim()) {
        errorMsg = 'El correo institucional es obligatorio.';
      } else if (!value.includes('@') || !value.includes('.')) {
        errorMsg = 'Ingresa un correo electrónico válido.';
      }
    }

    if (field === 'password') {
      if (!value) {
        errorMsg = 'La contraseña institucional es obligatoria.';
      } else if (value.length < 4) {
        errorMsg = 'La contraseña debe tener un mínimo de 4 caracteres.';
      }
    }

    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
    return errorMsg;
  };

  const handleLogin = () => {
    // Validar ambos campos antes de procesar
    const userError = validateField('usuario', usuario);
    const passError = validateField('password', password);

    if (userError || passError) {
      return;
    }

    // CORRECCIÓN CLAVE: Buscar contra u.email en lugar de u.usuario
    const usuarioEncontrado = usuarios.find(
      (u) =>
        u.email.toLowerCase() === usuario.trim().toLowerCase() &&
        u.password === password
    );

    if (usuarioEncontrado) {
      setErrors({});
      onLogin(usuarioEncontrado); // Redirige a la pantalla del rol correspondiente en App.js
    } else {
      Alert.alert(
        'Acceso Denegado',
        'El correo o la contraseña ingresados son incorrectos. Verifica tus datos e intenta nuevamente.'
      );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />

      {/* Resplandor sutil superior */}
      <View style={styles.ambientGlow} />

      <View style={styles.content}>
        {/* Cabecera: Logo transparente y subtítulo */}
        <View style={styles.header}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.subtitle}>
            Acompañamiento escolar y seguimiento preventivo
          </Text>
        </View>

        {/* Tarjeta del Formulario */}
        <View style={styles.card}>
          <Text style={styles.inputLabel}>Correo Institucional</Text>
          <TextInput
            style={[
              styles.input,
              isUserFocused && styles.inputFocused,
              errors.usuario && styles.inputError,
            ]}
            placeholder="ej. nombre@educa360.com"
            placeholderTextColor="#94A3B8"
            value={usuario}
            onChangeText={(text) => {
              setUsuario(text);
              if (errors.usuario) validateField('usuario', text);
            }}
            onFocus={() => setIsUserFocused(true)}
            onBlur={() => {
              setIsUserFocused(false);
              validateField('usuario', usuario);
            }}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
          />
          {errors.usuario && (
            <Text style={styles.errorText}>{errors.usuario}</Text>
          )}

          <Text style={[styles.inputLabel, { marginTop: 16 }]}>Contraseña</Text>
          <TextInput
            style={[
              styles.input,
              isPasswordFocused && styles.inputFocused,
              errors.password && styles.inputError,
            ]}
            placeholder="••••••••••••"
            placeholderTextColor="#94A3B8"
            secureTextEntry
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (errors.password) validateField('password', text);
            }}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => {
              setIsPasswordFocused(false);
              validateField('password', password);
            }}
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}

          {/* Botón de acceso de tu diseño */}
          <CosmicButton
            title="Ingresar a la Plataforma"
            onPress={handleLogin}
          />

          <TouchableOpacity
            style={styles.helpButton}
            onPress={() =>
              Alert.alert(
                'Recuperación de Acceso',
                'Comunícate con el área de soporte tecnológico de la institución para restablecer tu contraseña.'
              )
            }
          >
            <Text style={styles.helpText}>¿Olvidaste tu contraseña institucional?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}