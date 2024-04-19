import {Caption, Link, Subtitle, Text, Title} from '../../components'

import {ArrowsArrowNarrowLeft} from '../../constants/assets'
import Header from '../../components/Header'
import {SafeAreaView} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const TypographyScreen = () => {
  const navigation = useNavigation()

  const goBack = () => navigation.goBack()

  return (
    <>
      <Header
        title="Typography"
        leftIcon={ArrowsArrowNarrowLeft}
        onLeftPress={goBack}
      />

      <SafeAreaView className="mx-8 mt-4">
        <Title level={1} cn="mb-2">
          Title level 1
        </Title>
        <Title level={2} cn="mb-2">
          Title level 2
        </Title>
        <Title level={3} cn="mb-2">
          Title level 3
        </Title>
        <Text level={1} cn="mb-2">
          Text level 1
        </Text>
        <Text level={2} cn="mb-2">
          Text level 2
        </Text>
        <Subtitle cn="mb-2">Subtitle</Subtitle>
        <Caption level={1} cn="mb-2">
          Caption level 1
        </Caption>
        <Caption level={2} cn="mb-2">
          Caption level 2
        </Caption>
        <Link level={1} cn="mb-2">
          Link level 1
        </Link>
        <Link level={2} cn="mb-2">
          Link level 2
        </Link>
      </SafeAreaView>
    </>
  )
}

export default TypographyScreen
