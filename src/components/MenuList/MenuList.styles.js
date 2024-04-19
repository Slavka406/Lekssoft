import {StyleSheet} from 'react-native'

const dynamicStyles = ({dividerMargin = 0, dividerWidth} = {}) => {
  const containerMaxWidth = 120
  const dividerWidthComputed = containerMaxWidth - 2 ** dividerMargin

  return StyleSheet.create({
    divider: {
      marginLeft: dividerMargin,
      width: dividerWidth || dividerWidthComputed,
    },
    item: {
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
    },
    textWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      maxWidth: '80%',
    },
    iconContainer: {
      borderRadius: 6,
      height: 30,
      width: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
    },
    icon: {
      size: 30,
      color: 'gray',
    },
    image: {width: 20, height: 20},
    tintColor: 'white',
  })
}

export default dynamicStyles
