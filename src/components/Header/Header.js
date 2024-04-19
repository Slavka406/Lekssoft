import {SafeAreaView, TouchableOpacity, View} from 'react-native'
import {Text, Title} from '../Typography'

import Icon from '../Icon'

const Header = ({
  title,
  leftText,
  leftIcon,
  rightText,
  rightIcon,
  onRightPress = () => {},
  onLeftPress = () => {},
}) => {
  return (
    <View className="bg-white">
      <SafeAreaView className="flex-row justify-between">
        <View className="flex-row items-center justify-center px-4 pb-3 h-[50] w-full">
          {(leftIcon || leftText) && (
            <TouchableOpacity
              className="absolute left-3 h-[40] w-[40]"
              onPress={onLeftPress}>
              {leftIcon && <Icon level={2} icon={leftIcon} />}
              {leftText && <Text>{leftText}</Text>}
            </TouchableOpacity>
          )}

          <Title level={2}>{title}</Title>

          {(rightIcon || rightText) && (
            <TouchableOpacity
              className="absolute left-3 h-[40] w-[40]"
              onPress={onRightPress}>
              {rightIcon && <Icon level={2} icon={rightIcon} />}
              {rightText && <Text>{rightText}</Text>}
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Header
