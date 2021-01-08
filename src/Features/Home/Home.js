import React, {Component} from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import {HomeStyle} from './style';
import {GlobalStyle} from '../../Shared/GlobalStyle/style';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    };
  }

  changeImage() {
    if (this.state.status) {
      this.setState({
        status: false,
        image:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      });
    } else {
      this.setState({
        status: true,
        image:
          'https://images.unsplash.com/photo-1515734674582-29010bb37906?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      });
    }
  }

  render() {
    return (
      <View style={[HomeStyle.Container]}>
        <View style={HomeStyle.topContainer}>
          <View style={HomeStyle.HeroContainer}>
            <View style={HomeStyle.HeroProfile}>
              <Image
                source={{uri: this.state.image}}
                style={HomeStyle.HeroImage}
              />
              <View style={HomeStyle.HeroDetails}>
                <View>
                  <Text style={HomeStyle.HeroName}>Sutiyem Sofyan</Text>
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
            <View style={HomeStyle.ButtonHeroContainer}>
              <TouchableOpacity
                style={[HomeStyle.ButtonContainer, HomeStyle.firstButton]}>
                <Text>Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[HomeStyle.ButtonContainer, HomeStyle.secondButton]}>
                <Text style={{color: 'white'}}>Follow</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
