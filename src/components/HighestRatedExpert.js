import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { expertsData } from './appContent';

const HighestRatedExpert = () => {
  const navigation = useNavigation();

  // Highest rated expert
  const expert = [...expertsData].sort((a, b) => b.rating - a.rating)[0];

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('expertsDetails', {
          expertId: expert.id,
        })
      }>
      <Image source={expert.image} style={styles.image} />

      <View style={styles.details}>
        <Text style={styles.name}>{expert.name}</Text>

        <Text style={styles.expertise}>{expert.expertise}</Text>

        <View style={styles.row}>
          <Image
            source={require('../assets/img/star.png')}
            style={styles.star}
          />
          <Text style={styles.rating}>{expert.rating}</Text>

          <Text style={styles.fee}>₹{expert.fee}</Text>
        </View>

        <Text style={styles.about} numberOfLines={2}>
          {expert.about}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HighestRatedExpert;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginTop: 12,
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 3,
    flexDirection: 'row',
    overflow: 'hidden',
  },

  image: {
    width: 120,
    height: 140,
  },

  details: {
    flex: 1,
    padding: 12,
  },

  name: {
    fontSize: 18,
    fontWeight: '700',
  },

  expertise: {
    color: 'gray',
    marginTop: 4,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  star: {
    width: 16,
    height: 16,
    marginRight: 4,
  },

  rating: {
    fontWeight: '600',
  },

  fee: {
    marginLeft: 15,
    color: '#2D5BFF',
    fontWeight: '700',
  },

  about: {
    marginTop: 10,
    color: '#666',
    lineHeight: 20,
  },
});