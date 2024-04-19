import {Text, TouchableOpacity} from 'react-native'

import PropTypes from 'prop-types'
import clsx from 'clsx'

const styles = {
  levels: {
    1: 'text-body1 font-body1 color-info',
    2: 'text-body2 font-body2 color-info',
  },
}

export default function Link({
  level = 1,
  children,
  cn = '',
  onPress = () => {},
}) {
  const classes = clsx(styles.levels[level], cn)

  return (
    <TouchableOpacity onPress={onPress}>
      <Text className={classes}>{children}</Text>
    </TouchableOpacity>
  )
}

Link.propTypes = {
  level: PropTypes.oneOf([1, 2]),
  children: PropTypes.node.isRequired,
  cn: PropTypes.string,
  onPress: PropTypes.func,
}
