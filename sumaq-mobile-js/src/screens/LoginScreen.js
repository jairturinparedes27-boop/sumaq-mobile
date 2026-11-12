
import React, { useState } from 'react';
import { styles } from './LoginScreen.styles';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

export default function LoginScreen() {

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  // ==========================================
  // INICIAR SESIÓN
  // Actualmente funciona SIN backend.
  // ==========================================

  const iniciarSesion = () => {

    Keyboard.dismiss();

    if (!usuario.trim() || !password.trim()) {

      Alert.alert(
        'Campos incompletos',
        'Ingresa tu usuario y contraseña.'
      );

      return;
    }

    // FUTURA CONEXIÓN CON BACKEND:
    // Aquí puedes realizar una petición POST a Spring Boot.
    // Por ejemplo:
    // POST http://TU_SERVIDOR:8090/api/auth/login
    //
    // Enviarías usuario y password.
    // Luego recibirías el token y los datos del usuario.

    Alert.alert(
      'Inicio de sesión',
      'La interfaz está lista. La autenticación se conectará posteriormente.'
    );
  };

  return (

    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={0}
    >

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >

          {/* LOGO Y NOMBRE DEL RESTAURANTE */}

          <View style={styles.logoContainer}>

            <Image
              source={require('../../assets/images/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />

            <Text style={styles.title}>
              SUMAQ ÑAN
            </Text>

            <Text style={styles.subtitle}>
              Sistema de gestión de restaurante
            </Text>

          </View>

          {/* FORMULARIO DE LOGIN */}

          <View style={styles.card}>

            <Text style={styles.welcome}>
              ¡Bienvenido!
            </Text>

            <Text style={styles.description}>
              Ingresa tus datos para continuar
            </Text>

            {/* USUARIO */}

            <Text style={styles.label}>
              Usuario
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Ingresa tu usuario"
              placeholderTextColor="#A99A89"
              value={usuario}
              onChangeText={setUsuario}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
            />

            {/* CONTRASEÑA */}

            <Text style={styles.label}>
              Contraseña
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Ingresa tu contraseña"
              placeholderTextColor="#A99A89"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              returnKeyType="done"
              onSubmitEditing={iniciarSesion}
            />

            {/* BOTÓN */}

            <TouchableOpacity
              style={styles.button}
              onPress={iniciarSesion}
              activeOpacity={0.8}
            >

              <Text style={styles.buttonText}>
                INICIAR SESIÓN
              </Text>

            </TouchableOpacity>

          </View>

          {/* PIE DE PÁGINA */}

          <Text style={styles.footer}>
            © SUMAQ ÑAN - Todos los derechos reservados
          </Text>

        </ScrollView>

      </TouchableWithoutFeedback>

    </KeyboardAvoidingView>

  );
}
