import { View, Text, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'
import Colors from '../../../Shared/Colors';
import {useNavigation} from "@react-navigation/native"

export default function HeadlineList({ newsList }) {

  const navigator = useNavigation();

  return (
    <View style={{
    }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={newsList}
        renderItem={({ item }) => (

          !item.title.includes('Removed') &&
          <View>
            <View style={{ flex: 1, height: 1, backgroundColor: Colors.LIGHT_GRAY, marginTop: 10 }} />
            <TouchableOpacity  
              style={{
              width: Dimensions.get('screen').width*0.945, marginTop: 10,
              display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10,
            }} onPress={()=>navigator.navigate('read-news', {news: item})}>
              <Image
                style={{
                  width: 100, height: 100,
                  borderRadius: 15, objectFit: 'cover'
                }}
                source={{ uri: item.urlToImage }}
              />
              <View style={{
                width: '65%'
              }}>
                <Text numberOfLines={3} style={{ marginTop: 10, fontSize: 12, fontWeight: '800' }}>
                  {item.title}
                </Text>
                <Text style={{ marginTop: 5, color: Colors.YELLOW, fontSize: 10 }}>
                  {item?.source?.name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}