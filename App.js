import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 

import Exemplo_0 from './components/exemplo_1'; 
import Exemplo2 from './components/exemplo_2';

import Atividade1 from './components/atividade_1';
import Atividade_2 from './components/atividade_2';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade_2 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
});
