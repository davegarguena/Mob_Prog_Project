import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Login({ onLogin, onRegister, registeredAccounts }) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const handleBlur = () => {
    setShowError(false);
  };

  const handleLogin = () => {
    const account = registeredAccounts.find((acc) => {
      return acc.username.trim() === enteredUsername.trim() && acc.password === enteredPassword;
    });

    if (account) {
      onLogin(true);
    } else {
      setShowError(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      {showError && (
        <Text style={styles.errorText}>Wrong Credentials. Please try again.</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={enteredUsername}
        onChangeText={(text) => setEnteredUsername(text)}
        onBlur={handleBlur}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={enteredPassword}
        onChangeText={(text) => setEnteredPassword(text)}
        secureTextEntry={true}
        onBlur={handleBlur}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={onRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});




















































  




