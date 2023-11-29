import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { useAuth } from '@clerk/clerk-expo';
import CategoryTextSLider from '../Components/Home/CategoryTextSLider';
import Colors from '../../Shared/Colors';
import { Ionicons } from '@expo/vector-icons';
// import { useUser } from '@clerk/clerk-expo';
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';
import HeadlineList from '../Components/Home/HeadlineList';
import GlobalApi from '../Services/GlobalApi';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {

    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // getTopHeadline();
        getNewsByCategory('latest');
    }, [])

    const getNewsByCategory =async(category)=>{
        setLoading(true);
        const result = (await GlobalApi.getByCategory(category)).data;
        setNewsList(result.articles);
        setLoading(false);
    }
    const getTopHeadline = async () => {
        setLoading(true);
        const result = (await GlobalApi.getTopHeadline).data;
        setNewsList(result.articles);
        setLoading(false);
    }

    // const { isLoaded, signOut, user } = useUser();

    return (<SafeAreaView>


        <ScrollView showsVerticalScrollIndicator={false} style={{
            padding: 10, backgroundColor: Colors.WHITE
        }}>
            <View style={styles.heading}>
                <Text style={styles.appName}>Samachar</Text>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                    <Ionicons name="notifications-outline" size={28} color={Colors.YELLOW} />
                    {/* <TouchableOpacity >
                        <Image style={{
                            width: 40, height: 40, borderRadius: 50
                        }} source={{ uri: user.imageUrl }} />
                    </TouchableOpacity> */}
                </View>
            </View>
            <CategoryTextSLider selectedCategory={(category)=>getNewsByCategory(category)} />
            {loading 
                ? <ActivityIndicator style={{marginTop:Dimensions.get('screen').height*0.30}} size={'large'} color={Colors.YELLOW} />
                : <View>
                    <TopHeadlineSlider newsList={newsList} />
                    <HeadlineList newsList={newsList} />
                </View>}
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    appName: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.YELLOW
    },
    heading: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})