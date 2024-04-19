import {Divider, Text} from '../../components'
import {SafeAreaView, View} from 'react-native'

import {ArrowsArrowNarrowLeft} from '../../constants/assets'
import Header from '../../components/Header'
import {useNavigation} from '@react-navigation/native'

const DividerScreen = () => {
  const navigation = useNavigation()

  const goBack = () => navigation.goBack()

  return (
    <>
      <Header
        title="Icon"
        leftIcon={ArrowsArrowNarrowLeft}
        onLeftPress={goBack}
      />

      <SafeAreaView className="mx-8 mt-4">
        <Divider cn="mt-2 mb-2" />
        <View className="flex-row justify-between">
          <Text>Text</Text>
          <Divider orientation="vertical" />
          <Text>Text</Text>
          <Divider orientation="vertical" />
          <Text>Text</Text>
        </View>
        <Divider cn="mt-2 mb-2" />
        <View className="flex-row justify-between">
          <Text>Text</Text>
          <Divider orientation="vertical" />
          <Text>Text</Text>
          <Divider orientation="vertical" />
          <Text>Text</Text>
        </View>
        <Divider cn="mt-2 mb-2" />
      </SafeAreaView>
    </>
  )
}

export default DividerScreen
