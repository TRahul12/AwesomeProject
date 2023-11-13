import React, { useState } from 'react';
import { Button, Text, TextInput, View } from "react-native";
import styles from "./Styles/style";
function App(){
    const [userInput, setUserInput] = useState('');
    const handlePress = () => {
        console.log(userInput); // Print the current value of userInput to the console
    };
    return(
        <View style={styles.viewStyle}>
            <View>
                <Text style={styles.textStyle}>Hii Buddy </Text>
            </View>
            <View>
                <TextInput style={styles.textInput}
                placeholder="Type here to translate!"
                onChangeText={setUserInput}
                value={userInput}
                />
            </View>
            <View>
                <Text style={styles.textStyle}>Hii Buddy </Text>
            </View>
            <View>
                <Button 
                title="Learn More" 
                color="#841584"
                onPress={handlePress}
                >
                </Button>
            </View>
        </View>
        
    )
}

export default App;