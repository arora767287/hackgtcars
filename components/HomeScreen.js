import React, { Component, useState} from 'react';
import { View, Text } from 'react-native';
import { styles } from "../styles";
import Progress from "react-native-progress"

function HomeScreen({route, navigation}){
    const [currScore, setCurrScore] = useState(10);
    return(
        <View>
            <Text style={{...styles.titleText}}>Home</Text>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-around", padding: 10}}>
                <View style={{...styles.filterContainer, width: "45%"}}>
                    <Text style={{textAlign: "center"}}>Visualizations</Text>
                </View>
                <View style={{...styles.filterContainer, width: "45%"}}>
                    <Text style={{textAlign: "center"}}>Enviroscore</Text>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen;