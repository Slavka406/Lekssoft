import {Text, TouchableOpacity} from 'react-native'

import PropTypes from 'prop-types'
import clsx from 'clsx'

const styles = {
  variants: {
    primary: {
      filled: 'bg-primary text-white',
      outlined: 'border border-primary text-primary',
      semiTransparent: 'bg-primary-lighten-t-3 text-primary',
      blurred: 'bg-white-lighten-t-3  text-primary',
      gray: 'bg-gray text-white',
    },
    danger: {
      filled: 'bg-danger text-white',
      outlined: 'border border-danger text-danger',
      semiTransparent: 'bg-danger-lighten-3 text-danger',
      blurred: 'bg-white-lighten-t-3 text-danger',
      gray: 'bg-gray text-danger',
      transparent: 'bg-transparent text-danger',
    },
    warning: {
      filled: 'bg-warning text-white',
      outlined: 'border border-warning text-warning',
      semiTransparent: 'bg-warning-lighten-3 text-warning',
      blurred: 'bg-white-lighten-t-3 text-warning',
      gray: 'bg-gray text-warning',
      transparent: 'bg-transparent text-warning',
    },
    success: {
      filled: 'bg-success text-white',
      outlined: 'border border-success text-success',
      semiTransparent: 'bg-success-lighten-3 text-success',
      blurred: 'bg-white-lighten-t-3 text-success',
      gray: 'bg-gray text-success',
      transparent: 'bg-transparent text-success',
    },
    info: {
      filled: 'bg-info text-white',
      outlined: 'border border-info text-info',
      semiTransparent: 'bg-info-lighten-3 text-info',
      blurred: 'bg-white-lighten-t-3 text-info',
      gray: 'bg-gray text-info',
      transparent: 'bg-transparent text-info',
    },
    white: {
      filled: 'bg-white text-gray',
      outlined: 'border border-white text-white',
      semiTransparent: 'bg-white-lighten-t-3 text-white',
      blurred: 'bg-white-lighten-t-3 text-white',
      gray: 'bg-gray text-white',
      transparent: 'bg-transparent text-gray',
    },
    black: {
      filled: 'bg-black text-white',
      outlined: 'border border-black text-black',
      semiTransparent: 'bg-black-lighten-t-3 text-black',
      blurred: 'bg-whit-lighten-t-3 text-black ',
      gray: 'bg-gray text-white',
      transparent: 'bg-transparent text-black',
    },
    disabled: {
      filled: 'bg-gray text-gray-lighten-4',
      outlined: 'border border-gray text-gray-lighten-4',
      semiTransparent: 'bg-gray-lighten-t-6 text-gray-lighten-4',
      blurred: 'bg-gray-lighten-t-7 text-gray-lighten-4 ',
      gray: 'bg-gray text-gray-lighten-4',
      transparent: 'bg-transparent text-gray-lighten-4',
    },
  },
  shapes: {
    default: 'rounded-lg',
    rounded: 'rounded-full',
    circle: 'rounded-full',
  },
  sizes: {
    default: {
      default: 'px-4 py-[14px] tracking-[0.39px] w-fit',
    },
    rounded: {
      default: 'px-[12px] py-[7px] tracking-[0.39px] w-fit',
    },
    circle: {
      default: 'w-[38px] h-[38px] flex items-center justify-center',
    },
  },
  orientations: {
    horizontal: 'flex items-center justify-center',
    vertical: 'flex flex-col items-center justify-center !py-[8px]',
  },
  levels: {
    1: 'text-button1 font-button1',
    2: 'text-button2 font-button2',
  },
}

export default function Button({
  children,
  variant = 'primary',
  format = 'filled',
  shape = 'default',
  size = 'default',
  orientation = 'horizontal',
  level = 1,
  onPress = () => {},
  cn,
  ...rest
}) {
  const classes = clsx(
    styles.base,
    styles.variants[variant][format],
    styles.shapes[shape],
    styles.sizes[shape][size],
    styles.orientations[orientation],
    cn,
  )

  const textClasses = clsx(
    styles.levels[level],
    styles.variants[variant][format],
    'bg-transparent',
    'text-center',
    'justify-center',
    'items-center',
    'flex',
    'align-middle',
  )

  const isDisabled = variant === 'disabled'

  return (
    <TouchableOpacity
      className={classes}
      disabled={isDisabled}
      {...rest}
      onPress={onPress}>
      <Text className={textClasses}>{children}</Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    'primary',
    'danger',
    'warning',
    'success',
    'info',
    'white',
    'black',
    'disabled',
  ]),
  format: PropTypes.oneOf([
    'filled',
    'outlined',
    'semiTransparent',
    'blurred',
    'gray',
    'transparent',
  ]),
  shape: PropTypes.oneOf(['default', 'rounded', 'circle']),
  size: PropTypes.oneOf(['default', 'rounded', 'circle']),
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  levels: PropTypes.oneOf([1, 2]),
}
