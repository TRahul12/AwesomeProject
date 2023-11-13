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
            image: require('../background.jpg'),
            text: 'Slide 2 Text',
        },
        {
            image: require('../assets/images/chevrons-down.png'),
            text: 'Slide 3 Text',
        },
    ]; 
    const image = require('../background.jpg')
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(currentIndex => {
                const nextIndex = (currentIndex + 1) % 3;
                if (nextIndex === slides.length-1) {
                    clearInterval(interval);
                }
    
                return nextIndex;
            });
        }, 1000);
    
        return () => clearInterval(interval);
    }, []);

    const handlePressContinue = () => {
        setShowBackground(true);
    }
    if (showBackground) {
        return <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }} />;
    }
    return (
        <View style={styles.container}>
            <Swiper
                style={styles.wrapper}
                showsButtons={false}
                loop={false}
                index={currentIndex}
                autoplay={false}
                showsPagination={true}
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDotStyle}
            >
                {slides.map((slide, index) => (
                    <View key={index} style={styles.slide}>
                        <Image source={slide.image} style={styles.image} />
                        <Text style={styles.subtitle}>{slide.text}</Text>
                    </View>
                ))}
            </Swiper>
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
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
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
        backgroundColor: 'rgba(255,255,255,.3)',
        width: 24,
        height: 8,
        borderRadius: 12,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
        zIndex: 1,
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
        bottom: 60,
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
});

export default CarouselScreens;
