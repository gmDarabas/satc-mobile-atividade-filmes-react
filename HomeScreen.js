import { View, TextInput, StyleSheet, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useState } from 'react';
import Card from "./components/Card";

export default function HomeScreen({ navigation }) {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchData = async () => {
        const response = await fetch('http://www.omdbapi.com/?apikey=1cd66749&s=' + searchQuery);
        // const response = await fetch('http://www.omdbapi.com/?s=spider%20man&');
        const data = await response.json()
        setMovies(data.Search)
    }

    useEffect(() => {
        fetchData()
    }, []);

    useEffect(() => {
        fetchData()
    }, [searchQuery]);

    const onClickMovie = (movie) => {
        navigation.navigate('Movie', movie)
    }

    return (
        <SafeAreaView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 48 }}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar filmes..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                <FlatList
                    data={movies}
                    keyExtractor={item => item.imdbID}
                    renderItem={({ item: movie }) => {
                        return (
                            <Card
                                onClick={onClickMovie}
                                title={movie.Title}
                                type={movie.Type}
                                year={movie.Year}
                                imageUrl={movie.Poster}
                                key={movie.imdbID}
                            />
                        )
                    }}
                >
                </FlatList>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 16,
    },
    list: {
        paddingBottom: 16,
    },
});