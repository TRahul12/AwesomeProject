import React, { useState } from 'react';
import {  View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { NavigationContainer } from '@react-navigation/native';
import WalkthroughScreens from './WalkthroughScreen';
import { navigationRef } from '../App';

const TermsAndConditionsComponent = ({ onAccept })=>{
    const [agree, setAgree] = useState(false);
    const handlePress = () => {
        if(agree  && navigationRef.current && navigationRef.current.isReady()){
            navigationRef.current.navigate('WalkthroughScreens');
        }
    };
    return (
    <View style={styles.container}>
        <Text style={styles.header}>Terms and Conditions</Text>
        <ScrollView>
            <View style={styles.contentcontainer}>
                <View>
                    <Text style={styles.title}>Terms of Service</Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                </View>
                <View>
                    <Text style={styles.title}>Privacy Policy</Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                </View>
            </View>
        </ScrollView>
        <View style={styles.checkboxContainer}>
            <CheckBox value={agree} onValueChange={(newValue) => setAgree(newValue)} />
            <Text style={styles.label}>I agree to the terms and conditions.</Text>
        </View>
        <View style={styles.buttonWrapper}>
            <TouchableOpacity 
                style={[styles.button, agree ? styles.buttonActive : styles.buttonInactive]}
                disabled={!agree}
                onPress={handlePress}>
            <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        backgroundColor: 'black',

    },
    contentcontainer:{
        marginTop:70,
        marginLeft:20,
        gap:40
    },
    header:{
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop:32,
        paddingBottom:12,
        textAlign: 'center',
        color:'#FFFFFF',
        backgroundColor:"#38383D",
        borderBottomWidth: 1,
        width:393,
        height:76,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 28,
        color:'#F6FDDB',
        width:361,
        height:40,
    },
    text:{
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
        color:'#A5A5AA',
        width:361,
        height:264,
        lineHeight:24,
        fontWeight:'400',
    },
    label: {
        marginLeft: 8,
        color:"#fff"
    },
    checkboxContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingBottom:5,
    },
    button: {
        margin: 4,  
        borderRadius: 24,
        width:'100%',
        maxWidth:361,        
        height: 48,
        paddingVertical: 14,
        paddingHorizontal: 20,
    },
    buttonActive: {
        backgroundColor: "#D1F440",
    },
    buttonInactive: {
        backgroundColor: 'grey',
    },
    buttonWrapper:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#060609',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center', 
    }
})

export default TermsAndConditionsComponent;