import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Login from './Authentication/Login'; // Correct the import path
import Register from './Authentication/Register'; // Correct the import path

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [registeredAccounts, setRegisteredAccounts] = useState([]); 

  const handleLogin = (loggedIn) => {
    setIsAuthenticated(loggedIn);
    setShowRegister(false);
  };

  const handleRegisterToggle = () => {
    setShowRegister(!showRegister);
  };

  const addRegisteredAccount = (newAccount) => {
    
    setRegisteredAccounts([...registeredAccounts, newAccount]);
  };

  return (
    <View style={styles.container}>
      {isAuthenticated ? (
        <Text>Welcome to Your App!</Text>
      ) : showRegister ? (
        <Register
          onLogin={handleLogin}
          onRegister={handleRegisterToggle}
          registeredAccounts={registeredAccounts}
          addRegisteredAccount={addRegisteredAccount} // Pass the function to add registered accounts
        />
      ) : (
        <Login
          onLogin={handleLogin}
          onRegister={handleRegisterToggle}
          registeredAccounts={registeredAccounts}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});






