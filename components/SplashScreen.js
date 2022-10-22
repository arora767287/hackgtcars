import React, { Component} from 'react';
import { View, Text } from 'react-native';
import { styles } from "../styles";

function SplashScreen({route, navigation}){
    return(
        <View>
            <Text style={{...styles.titleText}}>Name</Text>
            
        </View>
    )
}
export default SplashScreen;