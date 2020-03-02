import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Gallery from './component/GalleryList';
import FullPhoto from './component/FullPhoto';
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Gallery">
          <Stack.Screen name="Gallery" component={Gallery} />
          <Stack.Screen name="Photo" component={FullPhoto} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
