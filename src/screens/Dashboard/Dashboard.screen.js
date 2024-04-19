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
import {useNavigation} from '@react-navigation/native'

const DashboardScreen = () => {
  const navigation = useNavigation()

  const SETTINGS_ITEMS = [
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
      icon: ShapesSquare,
      text: 'Card',
      iconBackgroundColor: '#1677ff',
      action: () => {},
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
      icon: ArrowsSwitchHorizontal02,
      text: 'Slider',
      iconBackgroundColor: '#fa6f00',
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
    {
      icon: LayoutFlexAlignTop,
      text: 'Tab',
      iconBackgroundColor: '#faad14',
      action: () => {},
      isArrowShow: true,
      textColor: 'grey-4',
    },
    {
      icon: EditorType01,
      text: 'Typography',
      iconBackgroundColor: '#1677ff',
      action: () => navigation.navigate('TYPOGRAPHY'),
      isArrowShow: true,
      textColor: 'grey-4',
    },
  ]
  return (
    <>
      <Header title="Components" />

      <SafeAreaView className="bg-white-lighten-t-6 flex-1">
        <ScrollView className="px-6">
          <View style={{paddingTop: 32, width: '100%', marginBottom: 32}}>
            <View style={{width: '100%'}} className="bg-white rounded-xl">
              <MenuList data={SETTINGS_ITEMS} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default DashboardScreen
