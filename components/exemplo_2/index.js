import { View, Text } from 'react-native'; 

import styles from './styles'

function Exemplo2 () {   
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo2</Text>

            <View style={styles.viewmensagem}>
                <Text style={styles.mensagem}>Olá thiago paci</Text>
        </View>

        </View>
    );
}

export default Exemplo2;