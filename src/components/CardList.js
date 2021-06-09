//Boilerplate
import React from "react";
import {StyleSheet, View} from "react-native";
import Card from "./Card";

const CardList = ({rickMorty}) => {
    return(
        <View>
            {rickMorty.count && rickMorty.results.map((rickMorty, id) => {
                return <Card key={id} name = {rickMorty.name} number = {id +1} />;
            })}
        </View>
    )
}

const styles = StyleSheet.create({}); 

export default CardList;
