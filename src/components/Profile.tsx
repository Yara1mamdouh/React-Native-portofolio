                                                                                         import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Linking,
} from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://media.licdn.com/dms/image/v2/D4E35AQH2G8PeNfvoJw/profile-framedphoto-shrink_800_800/B4EaFfwYxFGsAY-/0/1792607883156?e=1793268000&v=beta&t=789d-qiSMwlsbfagGeDKXO-x41jPznkL_M4Xf3sH-XE',
        }}
        style={styles.avatar}
      />

      <Text style={styles.greeting}>HELLO, I'M</Text>

      <Text style={styles.name}>Yara Khfagi</Text>

      <Text style={styles.job}>Mobile App Developer</Text>

      <Text style={styles.description}>
        I build clean, modern mobile applications
        and turn ideas into real digital products.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() =>
          Linking.openURL('mailto:hello@example.com')
        }
      >
        <Text style={styles.buttonText}>
          CONTACT ME ↗
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 35,
    backgroundColor: '#111111',
  },
  avatar: {
    width: 125,
    height: 125,
    borderRadius: 63,
    borderWidth: 3,
    borderColor: '#D9B45B',
    marginBottom: 25,
  },
  greeting: {
    color: '#D9B45B',
    fontSize: 11,
    letterSpacing: 3,
    marginBottom: 10,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  job: {
    color: '#D9B45B',
    fontSize: 14,
    marginBottom: 15,
  },
  description: {
    color: '#BBBBBB',
    fontSize: 13,
    lineHeight: 22,
    textAlign: 'center',
    maxWidth: 300,
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#D9B45B',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#111111',
    fontWeight: 'bold',
    fontSize: 13,
  },
});