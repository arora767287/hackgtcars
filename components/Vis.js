import React, { Component} from 'react';
import { View, Text } from 'react-native';
import { styles } from "../styles";

function Vis({route, navigation}){
    return(
        <View>
            <Text style={{...styles.titleText}}>Vis</Text>
        </View>
    )
}

export default Vis;