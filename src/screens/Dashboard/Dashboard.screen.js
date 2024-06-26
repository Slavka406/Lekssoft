import {
  AlertsAndFeedbackAlertTriangle,
  ArrowsSortDownBlockAsc,
  ArrowsSwitchHorizontal02,
  EditorType01,
  GeneralActivity,
  ImagesImage01,
  ImagesImage05,
  LayoutDivider,
  LayoutFlexAlignTop,
  LayoutLayoutTop,
  LayoutRows01,
  ShapesSquare,
  ShapesStar01,
  UsersUser01,
} from '../../constants/assets'
import {SafeAreaView, ScrollView, View} from 'react-native'

import Header from '../../components/Header'
import MenuList from '../../components/MenuList'
import {Title} from '../../components'
import {useNavigation} from '@react-navigation/native'

const DashboardScreen = () => {
  const navigation = useNavigation()

  const DONE_ITEMS = [
    {
      icon: EditorType01,
      text: 'Typography',
      iconBackgroundColor: '#1677ff',
      action: () => navigation.navigate('TYPOGRAPHY'),
      isArrowShow: true,
      textColor: 'grey-4',
    },
    {
      icon: LayoutDivider,
      text: 'Divider',
      iconBackgroundColor: '#fa6f00',
      action: () => navigation.navigate('DIVIDER'),
      isArrowShow: true,
      textColor: 'grey-4',
      isAdditionalButton: true,
    },
    {
      icon: ImagesImage01,
      text: 'Icon',
      iconBackgroundColor: '#0b0a0e73',
      action: () => navigation.navigate('ICON'),
      isArrowShow: false,
      textColor: 'grey-4',
      description: 'English',
    },

    {
      icon: ShapesSquare,
      text: 'Card',
      iconBackgroundColor: '#1677ff',
      action: () => navigation.navigate('CARD'),
      isArrowShow: true,
      textColor: 'grey-4',
    },
  ]

  IN_PROGRESS_ITEMS = [
    {
      icon: ArrowsSortDownBlockAsc,
      text: 'Accordion',
      iconBackgroundColor: '#1677ff',
      action: () => {},
      isArrowShow: true,
      textColor: 'grey-4',
    },
    {
      icon: AlertsAndFeedbackAlertTriangle,
      text: 'Alert',
      iconBackgroundColor: '#faad14',
      action: () => {},
      isArrowShow: true,
      textColor: 'grey-4',
    },
    {
      icon: UsersUser01,
      text: 'Avatar',
      iconBackgroundColor: '#0b0a0e73',
      action: () => {},
      isArrowShow: true,
      textColor: 'grey-4',
    },
    {
      icon: LayoutRows01,
      text: 'Button',
      iconBackgroundColor: '#52c41a',
      action: () => {},
      isArrowShow: true,
      textColor: 'grey-4',
    },

    {
      icon: ArrowsSwitchHorizontal02,
      text: 'Slider',
      iconBackgroundColor: '#fa6f00',
      action: () => {},
      isArrowShow: true,
      textColor: 'grey-4',
    },
    {
      icon: LayoutFlexAlignTop,
      text: 'Tab',
      iconBackgroundColor: '#faad14',
      action: () => {},
      isArrowShow: true,
      textColor: 'grey-4',
    },
  ]

  const TO_DO_ITEMS = [
    {
      icon: ImagesImage05,
      text: 'Image',
      iconBackgroundColor: '#1677ff',
      action: () => {},
      isArrowShow: true,
      textColor: 'grey-4',
    },
    {
      icon: ShapesStar01,
      text: 'Logo',
      iconBackgroundColor: '#52c41a',
      action: () => {},
      isArrowShow: true,
      textColor: 'grey-4',
    },
    {
      icon: LayoutLayoutTop,
      text: 'Modal',
      iconBackgroundColor: '#0b0a0e73',
      action: () => {},
      isArrowShow: true,
      textColor: 'grey-4',
    },

    {
      icon: GeneralActivity,
      text: 'Statistic',
      iconBackgroundColor: '#52c41a',
      action: () => {},
      isArrowShow: true,
      textColor: 'grey-4',
    },
  ]
  return (
    <>
      <Header title="Components" />

      <SafeAreaView className="bg-white-lighten-t-6 flex-1">
        <ScrollView className="px-6">
          <Title level={2} cn="mt-4 mb-2">
            Done
          </Title>
          <View style={{width: '100%'}} className="bg-white rounded-xl">
            <MenuList data={DONE_ITEMS} />
          </View>
          <Title level={2} cn="mt-4 mb-2">
            In progress
          </Title>
          <View style={{width: '100%'}} className="bg-white rounded-xl">
            <MenuList data={IN_PROGRESS_ITEMS} />
          </View>
          <Title level={2} cn="mt-4 mb-2">
            To Do
          </Title>
          <View style={{width: '100%'}} className="bg-white rounded-xl">
            <MenuList data={TO_DO_ITEMS} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default DashboardScreen
