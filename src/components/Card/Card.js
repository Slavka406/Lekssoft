import PropTypes from 'prop-types'
import {View} from 'react-native'
import clsx from 'clsx'

const styles = {
  orientations: {
    horizontal: 'w-full h-[1] bg-gray-lighten-7',
    vertical: 'h-full w-[1] bg-gray-lighten-7',
  },
}

export default function Card({orientation = 'horizontal', cn = ''}) {
  const classes = clsx(styles.orientations[orientation], cn)

  return <View className={classes} />
}

Card.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  cn: PropTypes.string,
}
