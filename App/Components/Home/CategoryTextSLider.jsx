import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../Shared/Colors';

export default function CategoryTextSLider({selectedCategory}) {

  const categoryList=[
    {
      id: 1,
      name: 'Latest'
    },
    {
      id: 2,
      name: 'World'
    },
    {
      id: 3,
      name: 'Business'
    },
    {
      id: 4,
      name: 'Sports'
    },
    {
      id: 5,
      name: 'Life'
    },
    {
      id: 6,
      name: 'Movie'
    },
  ]

  const [active, setActive] = useState(1);

  const onCategoryClick=(id)=>{
    setActive(id);
  }

  return (
    <View style={{
      marginTop: 15
    }}>
      <FlatList 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
        data={categoryList}
        renderItem={({item, index})=> (
          <TouchableOpacity 
            onPress={()=>{onCategoryClick(item.id); selectedCategory(item.name)}}
            style={{}}>
            <Text style={item.id==active ? styles.selectedItem : styles.unSelectedItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  unSelectedItem: {
    marginRight: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.GRAY
  },
  selectedItem: {
    marginRight: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.YELLOW
  }
})