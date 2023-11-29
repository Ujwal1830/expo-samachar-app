import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../../Shared/Colors'
import {useNavigation} from "@react-navigation/native"

export default function TopHeadlineSlider({newsList}) {

  const navigator = useNavigation()

  return (
    <View style={{
      marginTop: 15
    }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={newsList}
        renderItem={({item})=>(
          !item.title.includes('Removed') &&
          <TouchableOpacity style={{
            width: Dimensions.get('screen').width*0.8, marginRight: 12,
          }} onPress={()=>navigator.navigate('read-news', {news: item})}
          >
            <Image
              style={{
                height: Dimensions.get('screen').width*0.75, backgroundColor: Colors.LIGHT_GRAY,
                borderRadius: 15, objectFit: 'fill'
              }}
              source={{uri: item.urlToImage}}
            />
            <Text numberOfLines={2} style={{marginTop: 10, fontSize: 15, fontWeight: '800'}}>{item.title}</Text>
            <Text style={{marginTop: 5, color: Colors.YELLOW, fontSize: 10}}>{item?.source?.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}