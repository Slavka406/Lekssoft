import React, {Fragment, Suspense} from 'react'

// import {MainMenu} from '../components'
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

// const BottomTab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Suspense>
      {/* <BottomTab.Navigator
        screenOptions={({route}) => ({
          title: route.name,
          headerShown: false,
        })}
        tabBar={props => <MainMenu {...props} variant="add" />}
        initialRouteName={isBusiness ? DASHBOARD_SCREEN : MAP_SCREEN}>
        <BottomTab.Screen
          name={'FAVORITE_PRODUCTS_SCREEN'}
          component={FavoriteProductsScreen}
        />
        <BottomTab.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
      </BottomTab.Navigator> */}
    </Suspense>
  )
}

export default BottomTabNavigator
