import FastImage from '@qonsoll/react-native-fast-image'
import PropTypes from 'prop-types'

const styles = {
  levels: {
    1: {width: 20, height: 20},
    2: {width: 28, height: 28},
    3: {width: 32, height: 32},
    4: {width: 40, height: 40},
    5: {width: 60, height: 60},
    6: {width: 70, height: 70},
    7: {width: 80, height: 80},
    8: {width: 90, height: 90},
    9: {width: 100, height: 100},
  },
}

export default function Icon({icon, level = 1, color}) {
  return (
    <FastImage source={icon} style={styles.levels[level]} tintColor={color} />
  )
}

Icon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9]),
}
