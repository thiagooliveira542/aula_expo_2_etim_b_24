import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './styles';

export default function Exemplo_3() {

    const [numero, setNumero] = useState(0);

    function incremento() {
        setNumero(numero + 1);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo  3</Text>

            <Pressable
                onPress={() => alert('Oi')}
                style={({ pressed }) => pressed ?
                    [styles.botao, styles.botaoPress]
                    :
                    styles.botao}
            >
                <Text style={styles.txtBotao}>Ex. botão</Text>

                <Text style={styles.titulo}>Exemplo State</Text>
            </Pressable>

            <Text style={styles.txtNumero}>{numero}</Text>
            <Pressable
                onPress={() => incremento()}
                style={({ pressed }) => pressed ?
                    [styles.botao, styles.botaoPress]
                    :
                    styles.botao}
            >
                <Text style={styles.txtbotao}>+1</Text>
            </Pressable>

        </View>
    );
}