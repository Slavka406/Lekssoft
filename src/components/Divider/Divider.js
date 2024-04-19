import PropTypes from 'prop-types'
import {View} from 'react-native'
import clsx from 'clsx'

const styles = {
  orientations: {
    horizontal: 'w-full h-[1] bg-gray-lighten-7',
    vertical: 'h-full w-[1] bg-gray-lighten-7',
  },
}

export default function Divider({orientation = 'horizontal', cn = ''}) {
  const classes = clsx(styles.orientations[orientation], cn)

  return <View className={classes} />
}

Divider.propTypes = {
  level: PropTypes.oneOf([1, 2]),
  children: PropTypes.node.isRequired,
  cn: PropTypes.string,
}
