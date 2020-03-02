import React, {useState} from 'react';
import {Image, View, ActivityIndicator, StyleSheet} from 'react-native';

export default function FullPhoto({route}) {
  const {url} = route.params;
  const [loading, setLoad] = useState(true);

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{uri: url}}
        onLoad={() => setLoad(false)}
      />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
  },
});
