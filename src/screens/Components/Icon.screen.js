import {
  AlertsAndFeedbackAlertCircle,
  ArrowsArrowUp,
  ChartsLineChartUp05,
  DevelopmentGitPullRequest,
  GeneralEye,
  GeneralEyeOff,
  SocialApple,
  SocialFacebook,
  SocialGoogle01,
} from '../../constants/assets'

import {ArrowsArrowNarrowLeft} from '../../constants/assets'
import Header from '../../components/Header'
import {Icon} from '../../components'
import {SafeAreaView} from 'react-native'
import colors from '../../styles/colors'
import {useNavigation} from '@react-navigation/native'

const IconScreen = () => {
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
        <Icon icon={SocialApple} level={1} />
        <Icon icon={AlertsAndFeedbackAlertCircle} level={2} />
        <Icon icon={GeneralEyeOff} level={3} />
        <Icon icon={GeneralEye} level={4} />
        <Icon icon={ArrowsArrowUp} level={5} />
        <Icon icon={SocialFacebook} level={6} />
        <Icon icon={DevelopmentGitPullRequest} level={7} />
        <Icon icon={SocialGoogle01} level={8} />
        <Icon
          icon={ChartsLineChartUp05}
          level={9}
          color={colors.primary.DEFAULT}
        />
      </SafeAreaView>
    </>
  )
}

export default IconScreen
