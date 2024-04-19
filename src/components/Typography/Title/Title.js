import PropTypes from 'prop-types'
import {Text} from 'react-native'
import clsx from 'clsx'

const styles = {
  levels: {
    1: 'text-h1 font-h1',
    2: 'text-h2 font-h2',
    3: 'text-h3 font-h3',
  },
}

export default function Title({level = 1, children, cn = ''}) {
  const classes = clsx(styles.levels[level], cn)

  return <Text className={classes}>{children}</Text>
}

Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3]),
  children: PropTypes.node.isRequired,
  cn: PropTypes.string,
}
