import React from "react";
import { Image, View,Text,TouchableOpacity,Animated,Easing } from "react-native";
import { useState,useRef } from "react";
import styles from "./middleStyles";


export const ContentPage = () => {
    const [isSinger, setIsSinger] = useState(require('./assets/singer.png'));
    const [isNext, setIsNext] = useState(true);
  
    const rotationAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const handleImageNext = () => {
    setIsNext(!isNext);
    const newImage = isSinger === require('./assets/singer.png')
      ? require('./assets/album-cover.png')
      : require('./assets/singer.png');

    Animated.timing(rotationAnim, {
      toValue: isNext ? 1 : 0,
      duration: 500, // Adjust the duration as needed
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      setIsSinger(newImage);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        easing: Easing.ease, // Use the smoother easing function
        useNativeDriver: true,
      }).start();
    });
  };

  const interpolateRotation = rotationAnim.interpolate({
    inputRange: [0, 1],
    outputRange: isNext ? ['0deg', '10deg'] : ['0deg', '-10deg'],
  });
 
  return (
    <View>
        <TouchableOpacity onPress={handleImageNext}>
        <Animated.Image
          source={isSinger}
          style={[
            isNext ? styles.banner1 : styles.banner2,
            { opacity: fadeAnim, transform: [{ rotate: interpolateRotation }] }
          ]}
        />
      </TouchableOpacity>
     <Text style={styles.text1}>Euphoric Echose</Text>
     <Text style={styles.text2}>Song Artist </Text>
     <Image source={require('./assets/track.png')} style={styles.img2}/>
     <View style={styles.container}>
     <Text  style={styles.text3}>1:33</Text>
     <Text  style={styles.text4}>5:32</Text>
    </View>
     <View style={styles.container2}>
     <Image source={require('./assets/suffle.png')} style={styles.suffle}/>
     <TouchableOpacity onPress={handleImageNext}>
     <Image source={require('./assets/next.png')} style={styles.prev}/>
     </TouchableOpacity>
     <Image source={require('./assets/play.png')} style={styles.play}/>
     <TouchableOpacity onPress={handleImageNext}>
     <Image source={require('./assets/next.png')} style={styles.next}/>
     </TouchableOpacity>
     <Image source={require('./assets/repeat.png')} style={styles.repeat}/>
     </View>
    </View>
  );
};