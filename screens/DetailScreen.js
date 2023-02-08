import {
    View,
    Text,
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView
  } from 'react-native'
  import React, { useState, useEffect, useCallback } from 'react'
  import { useFocusEffect } from '@react-navigation/native';
  import axios from 'axios';
  
  const DetailScreen = ({ navigation, route }) => {
  
    const [Detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const { id, title } = route.params;
  
    let cancelToken;
  
    const getData = async (id) => {
      try {
        setLoading(true)
        const res = await axios.get('https://api.codingthailand.com/api/course/' + id)
        //alert(JSON.stringify(res.data.data))
        setDetail(res.data.data);
        setLoading(false)
      }
      catch (error) {
        setLoading(false)
        setError(error)
      }
    }
  
    useEffect(() => {
      getData(id);
    }, [id])
  
    React.useLayoutEffect(() => {
      navigation.setOptions({
        // title : 'รายละเอียดสินค้า' // set static
        title: title //set dynamic
      })
    }, [navigation, title])
  
    const ItemSeparatorView = () => {
      return (
        <View
          style={{
            height: 0.5,
            width: '100%',
            backgroundColor: '#c8c8c8'
          }} />
  
      )
    }
  
    if (loading === true) {
      return (
        <View style={{ alignItems: 'center', alignContent: 'center', height: '100%' }}>
          <ActivityIndicator color='#ffff1e' size='large' />
        </View>
      )
    }
  
    const _onRefresh = () => { getData(id); }
  
    const _renderItem = ({ item, index }) => {
      return (
  
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, flexDirection: 'row', margin: 5 }}>
            <Text style={styles.thumbnail}>{index + 1}</Text>
            <View style={styles.dataContainer}>
              <View style={styles.dataContent}>
                <Text style={styles.title}>{item.ch_title}</Text>
                <Text note numberOfLines={1}>{item.ch_dateadd}</Text>
              </View>
            </View>
  
          </View>
        </View>
      )
    }
  
  
  
    return (
      <View>
        <FlatList
          data={Detail}
          keyExtractor={(item, index) => item.ch_id.toString()}
          onRefresh={_onRefresh}
          refreshing={loading}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={_renderItem}
        />
      </View>
    )
  }
  
  export default DetailScreen
  
  const styles = StyleSheet.create({
  
    container: {
      height: 80,
      elevation: 3,
      borderColor: 'gray',
      borderRadius: 5,
      flexDirection: 'row',
      marginHorizontal: 20,
    },
  
    dataContainer: {
      flex: 1,
    },
  
    thumbnail: {
      width: 30,
      height: 30,
      color: '#444',
      fontSize: 18,
      fontWeight: 'both',
      textAlign: 'center'
    }, dataContent: {
      marginTop: 5,
      marginLeft: 15,
    },
  
    title: {
      color: '#444',
      fontSize: 18,
      fontWeight: 'bold',
    },
    detail: {
      fontSize: 16,
      color: '#888',
      fontWeight: '700',
    },
    addButtonStyle: {
      width: '100%',
      marginBottom: 15,
    },
  });