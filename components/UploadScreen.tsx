import React, {useState} from 'react';
import {StyleSheet, Button, Image, View, Alert} from 'react-native';
import {
  launchImageLibrary,
  ImageLibraryOptions,
} from 'react-native-image-picker';

import UploadFile from '../services/UploadFile';

export default function UploadScreen() {
  const [imageUri, setImageUri] = useState('');

  const options: ImageLibraryOptions = {
    mediaType: 'photo',
    includeBase64: false,
    selectionLimit: 1,
  };

  const pickImage = async () => {
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.error('User cancelled image picker');
      } else if (response.errorCode) {
        console.error('ImagePicker Error: ', response.errorMessage);
      } else if (!response.assets?.length || !response.assets[0].uri) {
        console.error('no image selected');
      } else {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  // const pickImage = async () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //   }).then(image => {
  //     console.log(image);
  //   });
  // };

  const uploadImage = async () => {
    const response = await fetch(imageUri);
    const blob = await response.blob();
    const filename = imageUri.split('/').pop();
    UploadFile(blob, filename!);
    Alert.alert('Image uploaded successfully!');
  };

  return (
    <View style={styles.uploadScreen}>
      {imageUri && (
        <Image source={{uri: imageUri}} style={styles.previewImage} />
      )}
      <Button title="Select Image" onPress={pickImage} />
      <Button title="Upload Image" onPress={uploadImage} disabled={!imageUri} />
    </View>
  );
}

const styles = StyleSheet.create({
  uploadScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImage: {width: 200, height: 200},
});
