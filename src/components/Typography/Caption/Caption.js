import PropTypes from 'prop-types'
import {Text} from 'react-native'
import clsx from 'clsx'

const styles = {
  levels: {
    1: 'text-caption1 font-caption1',
    2: 'text-caption2 font-caption2',
  },
}

export default function Caption({level = 1, children, cn = ''}) {
  const classes = clsx(styles.levels[level], cn)

  return <Text className={classes}>{children}</Text>
}

Caption.propTypes = {
  level: PropTypes.oneOf([1, 2]),
  children: PropTypes.node.isRequired,
  cn: PropTypes.string,
}
