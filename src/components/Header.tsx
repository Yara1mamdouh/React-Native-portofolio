import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>MYPORTFOLIO.</Text>

      <Text style={styles.role}>DEVELOPER</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 55,
    paddingBottom: 20,
    backgroundColor: '#111111',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },

  logo: {
    color: '#D9B45B',
    fontSize: 18,
    fontWeight: 'bold',
  },

  role: {
    color: '#FFFFFF',
    fontSize: 10,
    letterSpacing: 1,
  },
});