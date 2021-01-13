import React from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {HomeStyle} from './style';
import FastImage from 'react-native-fast-image';

export default function Home() {
  const RenderHeroProfile = () => {
    return (
      <View style={HomeStyle.HeroProfile}>
        <FastImage
          source={{
            uri:
              'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          }}
          style={HomeStyle.HeroImage}
        />
        <View style={HomeStyle.HeroDetails}>
          <View>
            <Text style={HomeStyle.HeroName} numberOfLines={2}>
              Joko joko jooko joko joko joko joko joko joko joko
            </Text>
            <Text style={HomeStyle.HeroJob}>Tukang selfie</Text>
          </View>
          <View style={HomeStyle.HeroNumber}>
            <View>
              <Text style={HomeStyle.HeroDesc}>Articles</Text>
              <Text style={HomeStyle.HeroDescNumber}>34</Text>
            </View>
            <View>
              <Text style={HomeStyle.HeroDesc}>Followers</Text>
              <Text style={HomeStyle.HeroDescNumber}>980M</Text>
            </View>
            <View>
              <Text style={HomeStyle.HeroDesc}>Rating</Text>
              <Text style={HomeStyle.HeroDescNumber}>9.5</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const RenderButtonHeroContainer = () => {
    return (
      <View style={HomeStyle.ButtonHeroContainer}>
        <TouchableOpacity
          style={[HomeStyle.ButtonContainer, HomeStyle.ChatButton]}>
          <Text>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[HomeStyle.ButtonContainer, HomeStyle.FollowButton]}>
          <Text style={HomeStyle.FollowText}>Follow</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const RenderHeadingContent = (params) => {
    return (
      <View style={HomeStyle.HeadingContent}>
        <Text style={HomeStyle.HeadingTitle}>Notable works</Text>
        <Text style={HomeStyle.HeadingSubtitle}>
          Based on the popularity of the articles
        </Text>
      </View>
    );
  };

  const RenderSlide = () => {
    return (
      <ScrollView style={HomeStyle.Slide} horizontal={true}>
        <View style={HomeStyle.SlideItem}>
          <FastImage
            style={HomeStyle.PhotoSlide}
            source={require('../../Assets/Images/tech1.jpg')}
          />
          <Text style={HomeStyle.TitleSlide} numberOfLines={1}>
            Technology
          </Text>
          <Text style={HomeStyle.SubtitleSlide} numberOfLines={2}>
            We are currently looking for new core contributors that can help
            lead this project.
          </Text>
        </View>
        <View style={HomeStyle.SlideItem}>
          <FastImage
            style={HomeStyle.PhotoSlide}
            source={require('../../Assets/Images/tech2.jpg')}
          />
          <Text style={HomeStyle.TitleSlide} numberOfLines={1}>
            Technology
          </Text>
          <Text style={HomeStyle.SubtitleSlide} numberOfLines={2}>
            We are currently looking for new core contributors that can help
            lead this project.
          </Text>
        </View>
        <View style={HomeStyle.SlideItem}>
          <FastImage
            style={HomeStyle.PhotoSlide}
            source={require('../../Assets/Images/tech3.jpg')}
          />
          <Text style={HomeStyle.TitleSlide} numberOfLines={1}>
            Technology
          </Text>
          <Text style={HomeStyle.SubtitleSlide} numberOfLines={2}>
            We are currently looking for new core contributors that can help
            lead this project.
          </Text>
        </View>
        <View style={HomeStyle.SlideItem}>
          <FastImage
            style={HomeStyle.PhotoSlide}
            source={require('../../Assets/Images/tech4.jpg')}
          />
          <Text style={HomeStyle.TitleSlide} numberOfLines={1}>
            Technology
          </Text>
          <Text style={HomeStyle.SubtitleSlide} numberOfLines={2}>
            We are currently looking for new core contributors that can help
            lead this project.
          </Text>
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={[HomeStyle.Container]}>
      <View style={HomeStyle.TopContainer}>
        <View style={HomeStyle.HeroContainer}>
          <RenderHeroProfile />
          <RenderButtonHeroContainer />
        </View>
      </View>
      <View style={HomeStyle.Content}>
        <RenderHeadingContent />
        <RenderSlide />
      </View>
      <View style={HomeStyle.BottomContainer}>
        <View style={HomeStyle.BottomBox}>
          <Text style={HomeStyle.BottomTitle}>Feature Article</Text>
        </View>
        <Text style={HomeStyle.BottomContent} numberOfLines={2}>
          Coding mood low or even absent in people with depressed Error
        </Text>
      </View>
    </View>
  );
}
