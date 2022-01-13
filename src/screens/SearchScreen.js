import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = ( {navigation }) => {
    return (
        <View style={styles.body}>
            <SearchBar/>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    body: {
        
    },
})
