import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scrolls } from '../../../data/Scrolls';
import Scroll, { ScrollProps } from '../../../components/Card';


const card = () => {
  return (
    <FlatList
    data={scrolls}
    renderItem={({ item }) => (
      <Scroll title={item.title} imgSource={item.imgSource} themes={false} />
    )}
    keyExtractor={(item, index) => `${index}-${item.title}`}
  />
  )
}

export default card

const styles = StyleSheet.create({})