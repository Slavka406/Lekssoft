import PropTypes from 'prop-types'
import {Text} from 'react-native'
import clsx from 'clsx'

export default function Subtitle({children, cn = ''}) {
  const classes = clsx('text-subtitle font-subtitle', cn)

  return <Text className={classes}>{children}</Text>
}

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
  cn: PropTypes.string,
}
