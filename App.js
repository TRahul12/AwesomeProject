import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TermsAndConditionsComponent from './Screens/TermCondition';
import WalkthroughScreens from './Screens/WalkthroughScreen';
import { NavigationContainer } from '@react-navigation/native';
import CarouselScreens from './Screens/WelcomeScreen';



export const navigationRef = React.createRef();

function App(){
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                <Stack.Screen name="TermsAndConditions" component={TermsAndConditionsComponent} options={{ headerShown: false }} />
                <Stack.Screen name="WalkthroughScreens" component={WalkthroughScreens} options={{ headerShown: false }} />
                <Stack.Screen name="CarouselScreens" component={CarouselScreens} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;