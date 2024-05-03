import { View, Text, Pressable } from 'react-native';

import styles from './styles';

export default function Exemplo_3 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo  3</Text>

            <Pressable onPress={() => alert('Oi')} style={styles.botao}>
                <Text>Ex
                    Ex botão</Text>
            </Pressable>
        </View>
    );
}