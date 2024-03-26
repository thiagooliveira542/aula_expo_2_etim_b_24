import { View, Text } from 'react-native'; 

import Mensagem from './mensagem';

import styles from './styles';

 function Exemplo2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo2</Text>
            
           <Mensagem />

        </View>
    );
}

export default Exemplo2;