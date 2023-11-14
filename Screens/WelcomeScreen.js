import React, { useState, useEffect } from 'react';
import Swiper from "react-native-swiper";
import { Image, TouchableOpacity, View, StyleSheet, Text, ImageBackground } from "react-native";

const CarouselScreens = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showBackground, setShowBackground] = useState(false);
    const slides = [
        {
            image: require('../assets/images/chevrons-up.png'),
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            image: require("../assets/images/chevrons-down.png"),
            text: 'Slide 2 Text',
        },
        {
            image: require('../background.jpg'),
            text: 'Slide 3 Text',
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
                        <Image source={slide.image} style={styles.image} />
                        <Text style={styles.subtitle}>{slide.text}</Text>
                    </View>
                ))}
            </Swiper>
            </View>
           
            <View style={styles.buttonWrapper}>
                <TouchableOpacity  onPress={handlePressContinue}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    wrapper: {
        flex:0.8,
        backgroundColor:"#16161B",
        marginTop:50,
        width:361,
        height:618,
        alignSelf:"center",
        borderRadius:20,
        borderWidth:1,
        padding:20,
        gap:20
    },
    slide: {
        marginBottom:100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        width:361,
        height:100,
        backgroundColor:"#38383D",
        gap:20
    },
    image: {
        width: 321,
        height: 300,
        borderRadius:1,
        padding:72,
        gap:24
    },
    subtitle: {
        width: 321,
        height: 72,
        fontSize: 16,
        color: '#A5A5AA',
        lineHeight: 24,
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
        bottom: 40,
        gap:4
    },
    activeDotStyle: {
        backgroundColor: '#FFFFFF',
        width: 24,
        height: 8,
        borderRadius: 12,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
        zIndex: 1,
        bottom: 40,
        gap:4
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
        color: "#060609",
    },
    inactiveDotStyle:{
        backgroundColor: 'red',
        width: 24,
        height: 8,
        borderRadius: 12,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
        zIndex: 1,
        bottom: 60,
        gap:4
    }
});

export default CarouselScreens;
