import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Card({ imageUrl, title, type, year, onClick }) {
    const clickHandler = () => {
        onClick?.({ imageUrl, title, type, year, onClick })
    }

    return (
        <View style={styles.card} onClick={clickHandler}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.badges}>
                    <Text style={styles.badge}>{type}</Text>
                    <Text style={styles.badge}>{year}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row', // Torna o card horizontal
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
        margin: 10,
        padding: 10,
        alignItems: 'center',
        width: '100%'
    },
    image: {
        width: 100, // Ajuste a largura da imagem
        height: 120,
        borderRadius: 8,
    },
    content: {
        marginLeft: 10, // Espaço entre a imagem e o texto
        flex: 1, // Permite que o texto use o espaço restante
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 4,
    },
    badges: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 4,
    },
    badge: {
        backgroundColor: '#e0e0e0',
        borderRadius: 12,
        paddingVertical: 4,
        paddingHorizontal: 10,
        fontSize: 12,
        marginRight: 5, // Espaço entre as badges
    },
});
