import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo'
import SignInWithOAuth from './App/Components/SignInWithOAuth';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from "expo-constants"
import HomeNavigator from './App/Navigation/HomeNavigator';

export default function App() {

  // const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  return (
    // <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
    //   <SafeAreaView style={styles.container}>
    //     <SignedIn>
    //       <NavigationContainer>
    //         <HomeNavigator/>
    //       </NavigationContainer>
    //     </SignedIn>
    //     <SignedOut>
    //       <Login />
    //     </SignedOut>
    //   </SafeAreaView>
    // </ClerkProvider>
    <NavigationContainer>
        <HomeNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
