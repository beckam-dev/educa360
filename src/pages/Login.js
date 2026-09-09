import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StatusBar
} from 'react-native';
import CosmicButton from '../components/ui/CosmicButton';
import { styles } from '../styles/Login.styles';

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleLogin = () => {
    let currentErrors = {};

    if (!email.trim()) {
      currentErrors.email = 'El correo institucional es obligatorio.';
    } else if (!email.includes('@')) {
      currentErrors.email = 'Formato de correo no válido (@educa360.pe).';
    }

    if (!password) {
      currentErrors.password = 'La contraseña es obligatoria.';
    } else if (password.length < 6) {
      currentErrors.password = 'Debe tener al menos 6 caracteres.';
    }

    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors);
      return;
    }

    setErrors({});
    onLoginSuccess('Carlos Pérez (Apoderado)');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" backgroundColor="#120E1C" />

      {/* Halo de luz difuso superior */}
      <View style={styles.ambientGlow} />

      <View style={styles.content}>
        {/* Cabecera */}
        <View style={styles.header}>
          <View style={styles.badgePill}>
            <Text style={styles.badgePillText}>Edición Escolar 2026</Text>
          </View>
          <Text style={styles.title}>Educa360</Text>
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
              isEmailFocused && styles.inputFocused,
              errors.email && styles.inputError,
            ]}
            placeholder="usuario@educa360.pe"
            placeholderTextColor="#6D6680"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (errors.email) setErrors({ ...errors, email: null });
            }}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          <Text style={[styles.inputLabel, { marginTop: 16 }]}>Contraseña</Text>
          <TextInput
            style={[
              styles.input,
              isPasswordFocused && styles.inputFocused,
              errors.password && styles.inputError,
            ]}
            placeholder="••••••••••••"
            placeholderTextColor="#6D6680"
            secureTextEntry
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (errors.password) setErrors({ ...errors, password: null });
            }}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
          />
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

          {/* Componente Modular CosmicButton */}
          <CosmicButton
            title="Ingresar a la Plataforma"
            onPress={handleLogin}
          />

          <TouchableOpacity style={styles.helpButton}>
            <Text style={styles.helpText}>¿Olvidaste tu contraseña institucional?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}