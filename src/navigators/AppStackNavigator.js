import {
  DashboardScreen,
  DividerScreen,
  IconScreen,
  TypographyScreen,
} from '../screens'

import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

const AppStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'DASHBOARD'} component={DashboardScreen} />
      <Stack.Screen name={'TYPOGRAPHY'} component={TypographyScreen} />
      <Stack.Screen name={'ICON'} component={IconScreen} />
      <Stack.Screen name={'DIVIDER'} component={DividerScreen} />
    </Stack.Navigator>
  )
}

export default AppStackNavigator

{
  /* <SafeAreaView style={{flex: 1}} className="bg-white">
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 20}}
        style={{flex: 1}}>
        <TouchableOpacity activeOpacity={1} style={{flex: 1}}>
         
          <Title level={1}>H1</Title>
          <Title level={2}>H2</Title>
          <Title level={3}>H3</Title>
          <Text level={1}>Body1</Text>
          <Text level={2}>Body2</Text>
          <Subtitle>Subtitle</Subtitle>
          <Caption level={1}>Caption1</Caption>
          <Caption level={2}>Caption2</Caption>
          <Link level={1}>Link1</Link>
          <Link level={2}>Link2</Link>

        
          <Icon icon={SocialApple} level={1} />
          <Icon icon={AlertsAndFeedbackAlertCircle} level={2} />
          <Icon icon={GeneralEyeOff} level={3} />
          <Icon icon={GeneralEye} level={4} />
          <Icon icon={ArrowsArrowUp} level={5} />
          <Icon icon={SocialFacebook} level={6} />
          <Icon icon={DevelopmentGitPullRequest} level={7} />
          <Icon icon={SocialGoogle01} level={8} />
          <Icon
            icon={ChartsLineChartUp05}
            level={9}
            color={colors.primary.DEFAULT}
          />

        
          <Title level={1}>Primary</Title>
          <Button
            cn="mb-2 mt-2"
            variant="primary"
            format="filled"
            shape="default"
            size="default"
            orientation="horizontal">
            <Icon icon={SocialGoogle01} level={8} />
            Primary filled
            <Icon icon={SocialGoogle01} level={8} />
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="primary"
            format="outlined"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary outlined
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="primary"
            format="semiTransparent"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary semiTransparent
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="primary"
            format="blurred"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary blurred
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="primary"
            format="gray"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary gray
          </Button>
          <Title level={1}>Danger</Title>
          <Button
            cn="mb-2 mt-2"
            variant="danger"
            format="filled"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary filled
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="danger"
            format="outlined"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary outlined
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="danger"
            format="semiTransparent"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary semiTransparent
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="danger"
            format="blurred"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary blurred
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="danger"
            format="gray"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary gray
          </Button>
          <Title level={1}>Warning</Title>
          <Button
            cn="mb-2 mt-2"
            variant="warning"
            format="filled"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary filled
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="warning"
            format="outlined"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary outlined
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="warning"
            format="semiTransparent"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary semiTransparent
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="warning"
            format="blurred"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary blurred
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="warning"
            format="gray"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary gray
          </Button>
          <Title level={1}>Success</Title>
          <Button
            cn="mb-2 mt-2"
            variant="success"
            format="filled"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary filled
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="success"
            format="outlined"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary outlined
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="success"
            format="semiTransparent"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary semiTransparent
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="success"
            format="blurred"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary blurred
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="success"
            format="gray"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary gray
          </Button>
          <Title level={1}>Info</Title>
          <Button
            cn="mb-2 mt-2"
            variant="info"
            format="filled"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary filled
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="info"
            format="outlined"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary outlined
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="info"
            format="semiTransparent"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary semiTransparent
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="info"
            format="blurred"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary blurred
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="info"
            format="gray"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary gray
          </Button>
          <Title level={1}>White</Title>
          <View className="bg-primary">
            <Button
              cn="mb-2 mt-2"
              variant="white"
              format="filled"
              shape="default"
              size="default"
              orientation="horizontal">
              Primary filled
            </Button>
            <Button
              cn="mb-2 mt-2"
              variant="white"
              format="outlined"
              shape="default"
              size="default"
              orientation="horizontal">
              Primary outlined
            </Button>
            <Button
              cn="mb-2 mt-2"
              variant="white"
              format="semiTransparent"
              shape="default"
              size="default"
              orientation="horizontal">
              Primary semiTransparent
            </Button>
            <Button
              cn="mb-2 mt-2"
              variant="white"
              format="blurred"
              shape="default"
              size="default"
              orientation="horizontal">
              Primary blurred
            </Button>
            <Button
              cn="mb-2 mt-2"
              variant="white"
              format="gray"
              shape="default"
              size="default"
              orientation="horizontal">
              Primary gray
            </Button>
          </View>
          <Title level={1}>Black</Title>
          <Button
            cn="mb-2 mt-2"
            variant="black"
            format="filled"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary filled
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="black"
            format="outlined"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary outlined
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="black"
            format="semiTransparent"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary semiTransparent
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="black"
            format="blurred"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary blurred
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="black"
            format="gray"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary gray
          </Button>
          <Title level={1}>Disabled</Title>
          <Button
            cn="mb-2 mt-2"
            variant="disabled"
            format="filled"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary filled
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="disabled"
            format="outlined"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary outlined
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="disabled"
            format="semiTransparent"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary semiTransparent
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="disabled"
            format="blurred"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary blurred
          </Button>
          <Button
            cn="mb-2 mt-2"
            variant="disabled"
            format="gray"
            shape="default"
            size="default"
            orientation="horizontal">
            Primary gray
          </Button>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView> */
}
