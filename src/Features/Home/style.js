/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const Radius = 30;

export const HomeStyle = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topContainer: {
    height: 200,
    backgroundColor: '#8795AF',
    borderBottomLeftRadius: Radius,
    borderBottomRightRadius: Radius,
    paddingHorizontal: 30,
  },
  HeroContainer: {
    marginTop: 50,
    height: 220,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  HeroProfile: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  HeroImage: {
    height: 120,
    width: 120,
    borderRadius: 20,
  },
  HeroDetails: {
    justifyContent: 'space-around',
  },
  HeroName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  HeroJob: {
    fontSize: 16,
    color: 'gray',
  },
  HeroNumber: {
    elevation: 5,
    padding: 4,
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
});
