import {
  AlertsAndFeedbackAlertTriangle,
  ArrowsArrowNarrowRight,
} from '../../constants/assets'
import React, {Fragment} from 'react'
import {TouchableOpacity, View} from 'react-native'

import Divider from '../Divider'
import Icon from '../Icon'
import PropTypes from 'prop-types'
import {Text} from '../Typography'
import colors from '../../styles/colors'
import dynamicStyles from './MenuList.styles'

/**
 * It returns a list of menu items.
 * @param data - an array of objects that contain the following properties:
 * @param dividerWidth - The width of the divider
 * @param dividerMarginLeft - The margin left of the divider
 * @returns A function that takes in data, dividerWidth, and dividerMarginLeft as arguments.
 */
const MenuList = props => {
  const {data, dividerWidth, dividerMarginLeft} = props

  const dividerMargin = dividerMarginLeft || 4
  const styles = dynamicStyles({dividerMargin, dividerWidth})

  return data
    ? data.map((item, index) => (
        <Fragment key={index}>
          <TouchableOpacity
            activeOpacity={item?.action ? 0.2 : 1}
            onPress={item?.action}
            style={styles.item}>
            <View style={styles.textWrapper}>
              {item?.icon && (
                <View
                  style={[
                    styles.iconContainer,
                    {backgroundColor: item.iconBackgroundColor},
                  ]}>
                  <Icon icon={item.icon} color={colors.white.DEFAULT} />
                </View>
              )}
              <Text numberOfLines={1}>{item.text}</Text>
              {item?.isAdditionalButton && (
                <Icon
                  icon={AlertsAndFeedbackAlertTriangle}
                  color={colors.warning.DEFAULT}
                  cn="ml-2"
                />
              )}
            </View>
            <View flexDirection="row">
              <Text cn="color-gray-lighten-5">{item.description}</Text>
              {!!item.isArrowShow && (
                <Icon
                  icon={ArrowsArrowNarrowRight}
                  color={colors.gray['lighten-5']}
                />
              )}
              {!!item?.rightItem && <View>{item.rightItem()}</View>}
            </View>
          </TouchableOpacity>
          {data?.length - 1 !== index && (
            <Divider cn="pl-3" />

            // <Divider
            //   width={styles.divider.width}
            //   ml={styles.divider.marginLeft}
            // />
          )}
        </Fragment>
      ))
    : null
}

MenuList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  dividerWidth: PropTypes.number,
  dividerMarginLeft: PropTypes.number,
}

export default MenuList
