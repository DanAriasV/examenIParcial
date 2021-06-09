import React, {useEffect, useState} from "react";
// import React from "react";
import {StyleSheet, View, Text, ScrollView} from "react-native";
import fetchRickMorty from "../../api"; 
import CardList from "../CardList";

const Home = () => {
    const [rickMorty, setRickMorty] = useState({});
    const getRickMorty = async () => {
        const response = await fetchRickMorty();

        setRickMorty(response);
       
    };
    
    useEffect(() => {
        
        getRickMorty();
        
        
    }, []);
    
    return(
        <ScrollView>
            <View>
            <Text style={styles.title}>Rick y Morty con React Native y rickandmortyapi</Text>
            <CardList rickMorty = {rickMorty}/>
        </View>
        </ScrollView>
        
    );
};

const styles = StyleSheet.create({
    title: {
        marginTop: 60,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
}); 

export default Home; 