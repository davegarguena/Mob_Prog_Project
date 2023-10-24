import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet } from 'react-native';

export default function Register({ onRegister, onLogin, registeredAccounts, addRegisteredAccount }) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [registrationMessage, setRegistrationMessage] = useState('');
  const [errorMessageColor, setErrorMessageColor] = useState('red'); // Set the error message color to red

  const handleRegister = () => {
    if (enteredPassword !== passwordConfirmation) {
      setRegistrationMessage('Passwords do not match. Please try again.');
      setErrorMessageColor('red'); // Set the error message color to red
    } else {
      const userExists = registeredAccounts.some((account) => account.username === enteredUsername);
      if (userExists) {
        setRegistrationMessage('Username already exists. Please choose another.');
        setErrorMessageColor('red'); // Set the error message color to red
      } else {
        const newAccount = { username: enteredUsername, password: enteredPassword };
        addRegisteredAccount(newAccount);
        setRegistrationMessage('Account registered successfully.');
        setErrorMessageColor('green'); // Set the error message color to green for success
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>
      <Text style={[styles.message, { color: errorMessageColor }]}>{registrationMessage}</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={enteredUsername}
        onChangeText={(text) => setEnteredUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={enteredPassword}
        onChangeText={(text) => setEnteredPassword(text)}
        secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={passwordConfirmation}
        onChangeText={(text) => setPasswordConfirmation(text)}
        secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
      />
      <View style={styles.passwordToggle}>
        <Text>Show Password</Text>
        <Switch
          value={showPassword}
          onValueChange={() => setShowPassword(!showPassword)}
        />
      </View>
      <Button title="Register" onPress={handleRegister} />
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
  message: {
    marginBottom: 10,
  },
  passwordToggle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});











































