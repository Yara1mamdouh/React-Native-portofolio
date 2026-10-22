import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Linking,
} from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>LET'S CONNECT</Text>

      <Text style={styles.title}>
        Have a project in mind?
      </Text>

      <View style={styles.links}>
        <Pressable
          style={styles.button}
          onPress={() =>
            Linking.openURL('https://github.com/Yara1mamdouh')
          }
        >
          <Text style={styles.buttonText}>
            GitHub ↗
          </Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() =>
            Linking.openURL('https://www.linkedin.com/in/yara-khfagi')
          }
        >
          <Text style={styles.buttonText}>
            LinkedIn ↗
          </Text>
        </Pressable>
      </View>

      <View style={styles.divider} />

      <Text style={styles.copyright}>
        © 2026 Your Name. All rights reserved.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111111',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 35,
    alignItems: 'center',
  },
  label: {
    color: '#D9B45B',
    fontSize: 11,
    letterSpacing: 3,
    marginBottom: 12,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 22,
  },
  links: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 30,
  },
  button: {
    borderWidth: 1,
    borderColor: '#D9B45B',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 22,
  },
  buttonText: {
    color: '#D9B45B',
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#383838',
    width: '100%',
    marginBottom: 20,
  },
  copyright: {
    color: '#888888',
    fontSize: 11,
    textAlign: 'center',
  },
});