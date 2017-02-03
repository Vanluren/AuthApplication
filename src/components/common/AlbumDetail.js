import React from 'react';
import { Text,
         View,
         Image,
         Linking } from 'react-native';


import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


// Create component
const AlbumDetail = ({ album }) => {
  const { title, artist, url, image, thumbnail_image } = album;
  const { headerContentStyle,
          thumbnailStyle,
          thumbnailContainerStyle,
          headerTextStyle,
          albumImageStyle
        } = Styles;
      return (
        <Card>
          <CardSection>
            <View style={thumbnailContainerStyle}>
              <Image
                      style={thumbnailStyle}
                      source={{ uri: thumbnail_image }}
              />
            </View>
            <View style={headerContentStyle}>
              <Text style={headerTextStyle}>
                {title}
              </Text>
              <Text style={headerTextStyle}>
                {artist}
              </Text>
            </View>
          </CardSection>

          <CardSection>
            <Image style={albumImageStyle} source={{ uri: image }} />
          </CardSection>

          <CardSection>
            <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
          </CardSection>

        </Card>
      );
};

const Styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
// Make the component publicly available
export { AlbumDetail };
