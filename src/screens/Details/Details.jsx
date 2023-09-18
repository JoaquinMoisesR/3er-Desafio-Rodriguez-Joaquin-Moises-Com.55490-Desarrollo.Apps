import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import styles from './Details.style'

const Details = ({product}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Header title={'Detalles'} />
      <Image style={styles.image} source={{ uri: product.images[0] }} />
      <Text style={styles.title}>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text style={styles.price}>{`US$ ${product.price}`}</Text>
    </View>
  )
}

export default Details