import { View, Text } from 'react-native'
import {
    Button,
    Title,
    Paragraph,
  } from 'react-native-paper';
  import {
    Tabs,
    TabScreen,
    useTabIndex,
    useTabNavigation,
  } from 'react-native-paper-tabs';
  
  const ScreenWithText = ({text}) => {
      return (
          <View>
              <Title>{text}</Title>
          </View>
      )
  }

  const ExploreWitHookExamples = () => {
    const goTo = useTabNavigation();
    const index = useTabIndex();
    return (
      <View style={{ flex:1 }}>
        <Title>Explore</Title>
        <Paragraph>Index: {index}</Paragraph>
        <Button onPress={() => goTo(1)}>Go to Flights</Button>
      </View>
    );
  }
 export const ProfileTabs = () => {

      return (
          <View style={{minHeight: 500}}>
        <Tabs
          // defaultIndex={0} // default = 0
          // uppercase={false} // true/false | default=true | labels are uppercase
          // showTextLabel={false} // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
          // iconPosition // leading, top | default=leading
          // style={{ backgroundColor:'#fff' }} // works the same as AppBar in react-native-paper
          // dark={false} // works the same as AppBar in react-native-paper
          // theme={} // works the same as AppBar in react-native-paper
          // mode="scrollable" // fixed, scrollable | default=fixed
          // onChangeIndex={(newIndex) => {}} // react on index change
          // showLeadingSpace={true} //  (default=true) show leading space in scrollable tabs inside the header
          // disableSwipe={false} // (default=false) disable swipe to left/right gestures
        >
          <TabScreen label="Faves">
            <ScreenWithText text={'FAVES'}/>
          </TabScreen>
          <TabScreen label="Searches">
            <View style={{ backgroundColor: 'black', flex:1 }} >
            <Title>text</Title>
            </View>
          </TabScreen>
          <TabScreen
            label="Messages"
            // icon="bag-suitcase"
            // optional props
            // onPressIn={() => {
            //   console.log('onPressIn explore');
            // }}
            // onPress={() => {
            //   console.log('onPress explore');
            // }}
          >
             <ExploreWitHookExamples />
          </TabScreen>
        </Tabs>
        </View>
      )
  }