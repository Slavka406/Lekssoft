import PropTypes from 'prop-types'
import {View} from 'react-native'
import clsx from 'clsx'

const styles = {
  variants: {
    default: 'bg-white',
  },
  shapes: {
    default: 'rounded-xl',
  },
}

export default function Card({
  variant = 'default',
  shape = 'default',
  children,
  cn = '',
}) {
  const classes = clsx(
    styles.variants[variant],
    styles.shapes[shape],
    'overflow-hidden',
    cn,
  )

  return <View className={classes}>{children}</View>
}

Card.propTypes = {
  variant: PropTypes.oneOf(['default']),
  shape: PropTypes.oneOf(['default']),
  cn: PropTypes.string,
}
