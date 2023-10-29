import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';

import api from './src/services/api';

function App() {
  const [cep, setCep] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>Digite o cep desejado:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 79003242"
          value={cep}
          onChangeText={text => setCep(text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonArea}>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#1d75cd'}]}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#cd5e1d'}]}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.result}>
        <Text style={styles.itemText}>CEP: 93029302</Text>
        <Text style={styles.itemText}>Logradouro: Rua dos devs</Text>
        <Text style={styles.itemText}>Bairro: Park</Text>
        <Text style={styles.itemText}>Cidade: Fortaleza</Text>
        <Text style={styles.itemText}>Estado: CE</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18,
  },
  buttonArea: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around',
  },
  button: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
  },
  result: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 22,
  },
});

export default App;
