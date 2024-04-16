import { View, Text } from 'react-native'; 

import Mensagem from './mensagem';

import styles from './styles';

 function Exemplo2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo2</Text>
            
           <Mensagem nome='Thiago paci' sobrenome='Paci' />
           <Mensagem nome='GABI' idade={13} />
           <Mensagem nome='Rafinha' />

        </View>
    );
}

export default Exemplo2;