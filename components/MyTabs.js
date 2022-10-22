import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();
function MyTabs({route, navigation}){

    //User data/entry point stuff
    return(
        <View style={styles.screenContainer}>
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === "Home") {
                    iconName = focused ? 'pencil' : 'pencil-outline'
                }
                else if (route.name === "Vis") {
                    iconName = focused ? 'account-circle' : 'account-circle-outline'
                }
                else if (route.name === "Enviro") {
                    iconName = focused ? 'wallet' : 'wallet-outline'
                }
                return <MaterialCommunityIcons name={iconName} size={20} color={"#fff"} style={{ height: 20 }} />;
            },
            tabBarStyle: { position: 'absolute', zIndex: 2, bottom: 0, borderTopLeftRadius: 8, borderTopRightRadius: 8, overflow: "hidden" },
            tabBarLabelStyle: {
                fontSize: 12,
                marginBottom: 5
            },
            tabBarInactiveTintColor: "#fff",
            //tabBarInactiveTintColor:{ "#fff"},
            tabBarActiveTintColor: '#fff',
            tabBarActiveBackgroundColor: "rgba(255, 255, 255, .2)",
            tabBarBackground: () => (
            <LinearGradient colors={['#663792', '#3d418b', '#0a4487']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} style={{ height: "100%" }} >
            </LinearGradient>
            ),
        })
        }
        >
            <Tab.Screen 
                name='Home' 
                options={{ headerShown: false }} 
                component={HomeScreen} 
                initialRouteName={HomeScreen} 
            />
            <Tab.Screen
                name="Visualization"
                component={Vis}
                options={({ navigation }) => ({
                    headerShown: false,
                    tabBarButton: (props) => (
                        <TouchableOpacity
                            {...props}
                            onPress={() =>
                                navigation.navigate('Vis') //pass param prop in
                            }
                        />
                    ),
                })}
            />
            
            <Tab.Screen
                name="Enviroscore"
                component={Enviro}
                options={({ navigation }) => ({
                    headerShown: false,
                    tabBarButton: (props) => (
                        <TouchableOpacity
                            {...props}
                            onPress={() =>
                                navigation.navigate('Enviro')
                            }
                        />
                    ),
                })}
            />
        </Tab.Navigator>

    </View>
    )
}
const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    linearGradient: {
        height: 55,
        justifyContent: "center",
        zIndex: 1,
        position: "absolute",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }
})
export default MyTabs;