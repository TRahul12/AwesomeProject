import React, { useRef, useState } from "react";
import { Text, TouchableOpacity, View, ImageBackground, Image, StyleSheet} from "react-native";
import Swiper from "react-native-swiper";
import { navigationRef } from "../App";


const WalkthroughScreens = () => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [skipTutorial, setSkipTutorial] = useState(false);
  const images = {
    'handpoint': require('../assets/images/handpoint.png'),
    'uparrow': require('../assets/images/chevrons-up.png'),
    'downarrow': require('../assets/images/chevrons-down.png'),
    'leftarrow': require('../assets/images/chevrons-left.png'),
    'rightarrow': require('../assets/images/chevrons-right.png'),
    'details': require('../assets/images/Icon-Button.png'),
    'details1': require('../assets/images/Icon-Button1.png'),
    'details2': require('../assets/images/Icon-Button2.png'),
  };
  const Walkthroughlist = [
    { id: 1, title: "Swipe up and down to explore curated talent.", imageKey: 'handpoint'},
    { id: 2, title: "Swipe left to learn get details and learn about talent.", imageKey: 'swipeLeft'},
    { id: 3, title: "Swipe right to quickly invest.", imageKey: 'swipeRight'},
    { id: 4, title: "Get details, add to your Watch List, and invest with buttons.", imageKey: 'details'}
  ];
  const image = require('../background.jpg')

  const handleNextPress = () => {
    const isLastSlide = currentSlide === Walkthroughlist.length - 1;
    if (currentSlide < Walkthroughlist.length - 1) {
      swiperRef.current.scrollBy(1);
    }if(isLastSlide && navigationRef.current && navigationRef.current.isReady()) {
      navigationRef.current.navigate('CarouselScreens');
    }
  };

  const handleSkipPress = () => {
    setSkipTutorial(true);
  };

  if (skipTutorial) {
    return <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
        <Swiper
          ref={swiperRef}
          style={styles.swiper}
          paginationStyle={styles.paginationstyle}
          activeDotColor="white"
          activeDotStyle={styles.activedotStyle}
          loop={false}
          onIndexChanged={(index) => setCurrentSlide(index)}
        >
          {Walkthroughlist.map((item) => (
            <View key={item.id} style={styles.slide}>
              <View style={styles.flexStyle}>
                {item.id === 1 && (
                  <>
                    <View style={styles.wrapper}>
                      <Image source={images.uparrow} style={styles.updownstyle} />
                      <Image source={images.downarrow} style={styles.updownstyle} />
                    </View>
                    <Image source={images.handpoint} style={styles.handpointStyle} />
                  </>
                )}
                {item.id === 2 && (
                <>
                 <View style={styles.containerStyle}>
                 <Image source={images.rightarrow} style={styles.arrowStyle} />
                  <Image source={images.handpoint} style={styles.leftarrowStyle} />
                 </View>
                  
                </>
              )}
              {item.id === 3 && (
              <>
                  <Image source={images.leftarrow} style={styles.arrowStyle} />
                  <Image source={images.handpoint} style={styles.handpointStyle} />
              </>
              )}
              {item.id === 4 && (
              <>
                <Image source={images.details} style={styles.detailsStyle}/>
                <Image source={images.details1} style={styles.detailsStyle} />
                <Image source={images.details2} style={styles.detailsStyle} />
              </>
              )}
           </View>            
              <Text style={styles.title}>{item.title}</Text>
            </View>
          ))}
        </Swiper>
        <View style={styles.nextStyle}>
          <TouchableOpacity style={styles.buttonStyle} onPress={handleNextPress}>
            <Text style={styles.buttontextStyle}>
              {currentSlide === Walkthroughlist.length - 1 ? "Get Started" : "Next"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.skipButtonStyle}>
          <TouchableOpacity onPress={handleSkipPress}>
            <Text style={styles.skipButtonText}>Skip Tutorial</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles =StyleSheet.create({
  activedotStyle:{
      width: 20, 
      height: 8
  },
  flexStyle:{
    flexDirection: 'row', 
    alignItems: 'center'
  },
  paginationstyle:{
      position: "absolute", 
      bottom: "30%"
  },
  containerStyle:{
      flexDirection: 'row',
      position: 'relative',
  },
  wrapper: { 
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    height:"100%"
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign:"center",
    top:40,
    width:'90%',
  },
  imageStyle:{
      height:180,
      width:120,
      top:"277",
      left:"137"
  },
  buttonStyle:{
      backgroundColor:"#D1F440",
      paddingHorizontal:20,
      justifyContent:'center',
      alignItems:'center',
      paddingVertical:14,
      borderRadius:24,
      marginBottom:20,
      width:361
  },
  nextStyle:{
      position:"absolute",
      bottom:"5%",
      left : 0,
      right : 0,
      justifyContent :'center',
      alignItems :"center"
  },
  buttontextStyle:{
      fontSize: 18, 
      color: "#060609"
  },
  skipButtonText:{
      fontSize:18, 
      color:"#FFFFFF",
  },
  skipButtonStyle:{
      zIndex: 10,
      position:"absolute",
      backgroundColor:"#38383D",
      paddingVertical: 14,
      top: 30,
      right: 10,
      paddingHorizontal: 20, 
      borderRadius:24,
      width:140,
      height:48      
  },
  detailsStyle:{
      width: 44, 
      height: 44, 
      marginRight: 5,
  },
  leftarrowStyle:{
      position: 'absolute',
      top: -5,
      left: 15,
      height:48,
      width:48
  },
  arrowStyle:{
      width: 32, 
      height: 32
  },
  updownstyle:{
    marginBottom: 30,
    width:32, 
    height:32
  },
  handpointStyle:{
      width:48,
      height:48
  }
})

export default WalkthroughScreens;