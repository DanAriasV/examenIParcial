import React from "react";
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";
import getEnvVars from "../../environment";

const {imageUrl} = getEnvVars();
const {width, height} = Dimensions.get("screen");

const Card = ({name, species,type ,gender, status, location,  }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.species}>{species}</Text>
            <Text style={styles.type}>{type}</Text>
            <Text style={styles.gender}>{gender}</Text>
            <Text style={styles.status}>{status}</Text>
            <Text style={styles.location}>{location}</Text>
            
        
            
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        padding: 20,
        margin: 10,
        borderColor: "#000",
        borderWidth: 1,
    },
    name : {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center",

    },
    species : {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center",

    },
    type : {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center",

    },
    gender : {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center",

    },
    status : {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center",

    },
    location : {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center",

    },
    image : {
        width: width * 0.85,
        height: height* 0.40,
    }
}); 

export default Card;