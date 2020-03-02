import React from 'react';
import {getGallery} from '../actions/actions';
import {connect} from 'react-redux';
import {
  Image,
  Text,
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

class Gallery extends React.Component {
  componentDidMount() {
    this.props.getGallery();
  }

  render() {
    const {loading, gallery, navigation} = this.props;
    if (loading) {
      return (
        <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />
      );
    }

    return (
      <SafeAreaView>
        <View>
          <FlatList
            data={gallery}
            renderItem={({item}) => {
              return (
                <View style={styles.container}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Photo', {
                        url: item.urls.full,
                      });
                    }}>
                    <Image
                      style={{width: 100, height: 100}}
                      source={{uri: item.urls.small}}
                    />
                  </TouchableOpacity>
                  <View style={styles.infoWrap}>
                    <Text style={styles.title}>{item.user.name}</Text>
                    <Text style={styles.description}>
                      {item.alt_description}
                    </Text>
                  </View>
                </View>
              );
            }}
            keyExtractor={item => item.id}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  infoWrap: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
  },
  description: {
    flexWrap: 'wrap',
    fontSize: 12,
  },
});

function mapStateToProps(state) {
  const {loading, gallery} = state;

  return {
    loading,
    gallery,
  };
}

const mapDispatchToProps = {
  getGallery,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Gallery);
