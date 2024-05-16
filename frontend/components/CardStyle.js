// CardStyle.js
import { StyleSheet } from 'react-native';

export const cardStyles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    margin: 16,
    width: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 14,
    color: '#555',
  },
  dogType: {
    backgroundColor: 'lightblue',
    padding: 8,
    borderRadius: 16,
    marginRight: 8,
  },
  dogTypeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});