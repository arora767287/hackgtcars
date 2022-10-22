import React, { Component} from 'react';
import { View, Text } from 'react-native';
import { styles } from "../styles";

function Enviro({route, navigation}){
    return(
        <View>
            <Text style={{...styles.titleText}}>Enviro</Text>
        </View>
    )
}

export default Enviro;