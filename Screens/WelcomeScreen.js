import React, { useState, useEffect } from 'react';
import Swiper from "react-native-swiper";
import { Image, TouchableOpacity, View, StyleSheet, Text, ImageBackground } from "react-native";


const CarouselScreens = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showBackground, setShowBackground] = useState(false);
    const slides = [
        {
            image: require('../assets/images/chevrons-up.png'),
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            image: require("../assets/images/chevrons-down.png"),
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            image: require('../background.jpg'),
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ]; 
    const image = require('../background.jpg')

    const handlePressContinue = () => {
        setShowBackground(true);
    }
    if (showBackground) {
        return <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }} />;
    }
    const handleIndexChanged = (index) => {
        setCurrentIndex(index);
    };
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
            <Swiper
                showsButtons={false}
                loop={false}
                index={currentIndex}
                autoplay={true}
                autoplayTimeout={5}
                showsPagination={true}
                dotStyle={styles.dotStyle}
                onIndexChanged={handleIndexChanged}
                activeDotStyle={styles.activeDotStyle}
            >
        {slides.map((slide, index) => (
            <View key={index} style={styles.slide}>
                {/* Container for the Image */}
                <View style={styles.imageContainer}>
                    <Image source={slide.image} style={styles.image} />
                </View>

                {/* Container for the Text */}
                <View style={{}}>
                    <Text style={styles.subtitle}>{slide.text}</Text>
                </View>
            </View>
        ))}
        </Swiper>
        </View>
        <TouchableOpacity style={styles.buttonWrapper}
            onPress={handlePressContinue}>       
        <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38383D'
    },
    gradient: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        flex:0.8,
        backgroundColor:"#16161B",
        marginTop:50,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        width:361,
        height:100,
        backgroundColor:"#16161B",
        gap:20
    },
    dotStyle: {
        backgroundColor: '#242429',
        width: 12,       
        height: 12,      
        borderRadius: 6,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 5,
        zIndex: 1,
        top: 50,
        gap:4
    },
    activeDotStyle:{
        backgroundColor: '#FFFFFF',
        width: 24,
        height: 8,
        borderRadius: 12,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
        zIndex: 1,
        bottom: 0,
        gap:4,
        top: 50
    },
    imageContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        gap:24
    },
    textContainer: {
        lineHeight:24
    },
    image: {
        width:321,
        height:400
    },
    subtitle:{
        width:321,
        height:72,
        fontSize: 16,
        color: '#A5A5AA'
    },
    buttonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 24,
        width: 361,
        height: 48,
        backgroundColor: '#D1F440',
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "500",
        textAlign: 'center',
        lineHeight: 20,
        color: "#060609"
    }   
});

export default CarouselScreens;