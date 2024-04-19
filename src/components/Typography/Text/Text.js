import PropTypes from 'prop-types'
import {Text as RNText} from 'react-native'
import clsx from 'clsx'

const styles = {
  levels: {
    1: 'text-body1 font-body1',
    2: 'text-body2 font-body2',
  },
}

export default function Text({level = 1, children, cn = ''}) {
  const classes = clsx(styles.levels[level], cn)

  return <RNText className={classes}>{children}</RNText>
}

Text.propTypes = {
  level: PropTypes.oneOf([1, 2]),
  children: PropTypes.node.isRequired,
  cn: PropTypes.string,
}
