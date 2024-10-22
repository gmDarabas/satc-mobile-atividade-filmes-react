import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function MovieDetails({ route }) {
    const { imageUrl, title, type, year } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: imageUrl }} style={styles.headerImage} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{`${type} • ${year}`}</Text>
                <Text style={styles.description}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerImage: {
        width: '100%',
        height: 200,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    detailsContainer: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#888',
        marginBottom: 16,
    },
    description: {
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 16,
    },
    castTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 16,
    },
    cast: {
        fontSize: 14,
        color: '#555',
    },
});
