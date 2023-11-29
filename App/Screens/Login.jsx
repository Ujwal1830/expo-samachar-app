import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import newspaper from '../../assets/images/newspaper2.jpg'
import welcome from '../../assets/images/welcome.png'
import Colors from '../../Shared/Colors';
import SignInWithOAuth from '../Components/SignInWithOAuth';


export default function Login() {   
  return (
    <View style={{
        alignItems: 'center',
        backgroundColor: Colors.YELLOW
    }}>
        <Image 
            style={{
                marginTop:40,
                width: 250,
                height: 80,
            }}
            source={welcome}
        />
        <Image style={{
            width: 300,
            height:450,
            objectFit: 'contain',
            marginTop: 20,
            borderRadius: 20,
            marginHorizontal: 50
        }} source={newspaper} />

        <View style={{
            backgroundColor: Colors.WHITE,
            padding: 25,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: -120,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40
        }}>
            <Text style={styles.heading} >Your Ultimate</Text>
            <Text style={styles.heading}>News Provider App</Text>
            <Text style={{textAlign: 'center', marginTop: 20}}>
                Read all the latest 
                <Text style={{color: Colors.YELLOW}}> News </Text>
                here for absolutely free
            </Text>

            {/* <TouchableOpacity style={{ paddingHorizontal: 50, marginTop: 10,
                paddingVertical: 10, borderRadius: 5, backgroundColor: Colors.YELLOW
            }} onPress={()=>navigation.navigate('')}>
                <Text style={{color: Colors.WHITE}}>Login with Google</Text>
            </TouchableOpacity> */}
            {/* <SignInWithOAuth /> */}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})