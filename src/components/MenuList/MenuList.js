// import { Divider, Text } from 'native-base'
import React, {Fragment} from 'react'
import {TouchableOpacity, View} from 'react-native'

import {ArrowsArrowNarrowRight} from '../../constants/assets'
import Divider from '../Divider'
// import { ArrowsArrowNarrowRight } from '../../../__constants__/assets'
import FastImage from '@qonsoll/react-native-fast-image'
import PropTypes from 'prop-types'
import {Text} from '../Typography'
import dynamicStyles from './MenuList.styles'

// import { AlertsAndFeedbackAlertTriangle } from '~/__constants__/assets'

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
                  <FastImage
                    source={item.icon}
                    style={styles.image}
                    tintColor={styles.tintColor}
                  />
                </View>
              )}
              <Text numberOfLines={1}>{item.text}</Text>
              {item?.isAdditionalButton && (
                <FastImage
                  source={AlertsAndFeedbackAlertTriangle}
                  style={{width: 20, height: 20, marginLeft: 6}}
                  tintColor={'rgb(250, 173, 20)'}
                />
              )}
            </View>
            <View flexDirection="row">
              <Text color="textCaptionColor">{item.description}</Text>
              {!!item.isArrowShow && (
                <FastImage
                  source={ArrowsArrowNarrowRight}
                  style={styles.image}
                  tintColor={styles.icon.color}
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
