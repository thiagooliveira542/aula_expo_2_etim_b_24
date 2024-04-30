import { View, Text, Pressable } from 'react-native';

import styles from './styles';

export default function Exemplo_3 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo  3</Text>

            <Pressable>
                <Text>Ex,  botão</Text>
            </Pressable>
        </View>
    );
}