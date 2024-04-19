import 'react-native-gesture-handler'

import {Keyboard, LogBox, TouchableWithoutFeedback} from 'react-native'

import {AppStackNavigator} from './src/navigators'
import {AppearanceProvider} from 'react-native-appearance'
import {NavigationContainer} from '@react-navigation/native'
import {SafeAreaProvider} from 'react-native-safe-area-context'

// Ignore warning log notification by message
LogBox.ignoreLogs(['Warning: ...'])
// Ignore all warning log notifications
LogBox.ignoreAllLogs()

const App = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <AppearanceProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <AppStackNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </AppearanceProvider>
    </TouchableWithoutFeedback>
  )
}

export default App
