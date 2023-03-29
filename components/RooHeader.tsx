import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  rooImageSize: {
    width: win.width,
    height: win.height / 5,
  },
  rooImageText: {
    marginTop: 32,
    paddingHorizontal: 24,
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
  },
});
export default function RooHeader() {
  return (
    <View>
      <Image
        style={styles.rooImageSize}
        resizeMode={'contain'}
        source={{
          uri: 'https://cdn.asp.events/CLIENT_CloserSt_D86EA381_5056_B739_5482D50A1A831DDD/sites/US-Vet-Portfolio/media/libraries/exhibitors/9489634e-dc4d-11ec-910-06e21988b83f-logo.png',
        }}
      />
      <Text style={styles.rooImageText}>Photo Viewer</Text>
    </View>
  );
}
