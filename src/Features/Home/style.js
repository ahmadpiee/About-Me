/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Radius = 20;

export const HomeStyle = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  TopContainer: {
    height: hp(28),
    backgroundColor: '#8795AF',
    borderBottomLeftRadius: Radius,
    borderBottomRightRadius: Radius,
    paddingHorizontal: moderateScale(24),
  },
  HeroContainer: {
    marginTop: moderateScale(50),
    width: wp(88),
    height: hp(32),
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: Radius,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    padding: moderateScale(20),
  },
  HeroProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  HeroImage: {
    height: moderateScale(120),
    width: moderateScale(120),
    borderRadius: 20,
  },
  HeroDetails: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(40),
  },
  HeroName: {
    paddingBottom: hp(0.5),
    fontWeight: 'bold',
    fontSize: 20,
  },
  HeroJob: {
    fontSize: 16,
    color: 'gray',
  },
  HeroNumber: {
    marginTop: hp(1),
    width: wp(40),
    elevation: 5,
    paddingTop: hp(1),
    backgroundColor: '#f2f5fb',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  HeroDesc: {
    fontSize: 10,
  },
  HeroDescNumber: {
    fontWeight: 'bold',
    paddingVertical: hp(0.5),
  },
  ButtonHeroContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  ButtonContainer: {
    height: 40,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    elevation: 2,
  },
  firstButton: {
    backgroundColor: 'white',
  },
  secondButton: {
    backgroundColor: '#5374FF',
  },
  Content: {
    // backgroundColor: 'red',
    width: wp(88),
    height: hp(32),
    marginVertical: moderateScale(28),
  },
  HeadingTitle: {
    paddingBottom: hp(0.5),
    fontWeight: 'bold',
    fontSize: 20,
  },
  HeadingSubtitle: {
    fontSize: 16,
    color: 'gray',
  },
  Slide: {
    marginTop: moderateScale(10),
    flexGrow: 1,
  },
  SlideItem: {
    width: wp(40),
    paddingHorizontal: wp(1),
  },
  PhotoSlide: {
    height: moderateScale(108),
    width: moderateScale(128),
    borderRadius: Radius,
    marginBottom: moderateScale(10),
  },
  TitleSlide: {
    fontSize: 10,
    color: 'gray',
  },
  SubtitleSlide: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
