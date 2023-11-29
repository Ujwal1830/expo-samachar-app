import { View, Text, Image, Dimensions, TouchableOpacity, Share, ScrollView } from 'react-native'
import React from 'react';
import {useRoute} from '@react-navigation/native'
import Colors from '../../Shared/Colors';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import * as WebBrowser from 'expo-web-browser'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ReadNews() {

    const news = useRoute().params.news;
    const navigator = useNavigation();
    console.log(news)

    const shareNews=()=>{
        Share.share({
            message: news.title+"\nRead More"+news.description,
        })
    }

  return (
      <ScrollView style={{padding: 10, 
        backgroundColor: Colors.WHITE,flex: 1
        }}>
        <SafeAreaView>
            <View style={{
                marginBottom: 10, display: 'flex', flexDirection: 'row',
                justifyContent: 'space-between', alignItems: 'center',
            }}>
                <View style={{display: 'flex', flexDirection: 'row', 
                    alignItems: 'center', gap: 10
                }}>
                    <TouchableOpacity onPress={()=>navigator.goBack()}>
                        <Ionicons name="md-arrow-back" size={30} color="black" />
                    </TouchableOpacity>
                    <Text style={{fontSize: 14, fontWeight: 'bold',
                        color: Colors.YELLOW,
                    }}>{news.source.name}</Text>
                </View>
                <TouchableOpacity onPress={()=>shareNews()}>
                    <Ionicons name="share-outline" size={30} color="black" />
                </TouchableOpacity>

            </View>
            <Image source={{uri: news.urlToImage}}  style={{
                    width: '100%', height:300, objectFit: 'contain',
                    borderRadius: 10, marginBottom: 5,
            }}/>
            <View>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    {news.title}
                </Text>
                <Text style={{fontSize: 15, color: Colors.GRAY,
                    lineHeight: 25, marginTop: 5,
                }}>
                    {news.description}
                </Text>
                <TouchableOpacity onPress={()=> WebBrowser.openBrowserAsync(news.url)}>
                    <Text style={{fontSize: 13, color: Colors.YELLOW,
                        marginTop: 5, fontWeight: 'bold'
                    }}>Read More</Text>    
                </TouchableOpacity>
            </View>
    </SafeAreaView>
        </ScrollView>
  )
}