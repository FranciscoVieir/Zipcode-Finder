import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Keyboard,
} from 'react-native';

import api from './src/services/api';

function App() {
  const [cep, setCep] = useState('');
  const inputRef = useRef(null);
  const [userCep, setUserCep] = useState(null);

  function toClean() {
    setCep('');
    inputRef.current.focus();
    setUserCep(null);
  }

  async function toSearch() {
    if (cep === '') {
      alert('Digite um CEP válido');
      setCep('');
      return;
    }

    try {
      const response = await api.get(`/${cep}/json`);
      console.log(response.data);

      setUserCep(response.data);

      Keyboard.dismiss();
    } catch (error) {
      console.log('Erro: ' + error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Digite o CEP desejado:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 79003242"
        value={cep}
        onChangeText={text => setCep(text)}
        keyboardType="numeric"
        ref={inputRef}
      />
      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={[styles.button, styles.searchButton]}
          onPress={toSearch}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.clearButton]}
          onPress={toClean}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {userCep && (
        <View style={styles.result}>
          <Text style={styles.resultText}>CEP: {userCep.cep}</Text>
          <Text style={styles.resultText}>
            Logradouro: {userCep.logradouro}
          </Text>
          <Text style={styles.resultText}>Bairro: {userCep.bairro}</Text>
          <Text style={styles.resultText}>Cidade: {userCep.localidade}</Text>
          <Text style={styles.resultText}>Estado: {userCep.uf}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18,
  },
  buttonArea: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around',
  },
  button: {
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  searchButton: {
    backgroundColor: '#1d75cd',
  },
  clearButton: {
    backgroundColor: '#cd5e1d',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  result: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
  },
});

export default App;
