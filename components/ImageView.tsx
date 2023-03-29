import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  rooImageSize: {
    width: win.width / 1.2,
    height: win.height / 4,
  },
  imageViewText: {
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 10,
    fontWeight: '200',
    textAlign: 'center',
  },
});
export default function ImageView({
  imageTitle,
  imageUrl,
}: {
  imageTitle: string;
  imageUrl: string;
}) {
  return (
    <View>
      <Image
        style={styles.rooImageSize}
        resizeMode={'contain'}
        source={{uri: imageUrl}}
      />
      <Text style={styles.imageViewText}> Title : {imageTitle}</Text>
    </View>
  );
}
