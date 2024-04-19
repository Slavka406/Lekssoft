import {Card, Subtitle, Text, Title} from '../../components'

import {ArrowsArrowNarrowLeft} from '../../constants/assets'
import Header from '../../components/Header'
import {SafeAreaView} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const CardScreen = () => {
  const navigation = useNavigation()

  const goBack = () => navigation.goBack()

  return (
    <>
      <Header
        title="Card"
        leftIcon={ArrowsArrowNarrowLeft}
        onLeftPress={goBack}
      />

      <SafeAreaView className="mx-8 mt-4">
        <Card cn="p-6">
          <Title>Card Title</Title>
          <Subtitle cn="mb-2">Card Subtitle</Subtitle>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            hendrerit, urna at varius ultricies, elit metus lacinia justo, nec
            tincidunt justo libero et libero. Sed sit amet nulla
          </Text>
        </Card>
      </SafeAreaView>
    </>
  )
}

export default CardScreen
