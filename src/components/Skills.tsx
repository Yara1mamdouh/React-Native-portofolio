import { View, Text, StyleSheet } from 'react-native';

const skills = [
  { name: '⚛️ React Native', color: '#61DAFB' },
  { name: '🟨 JavaScript', color: '#F7DF1E' },
  { name: '🌐 HTML & CSS', color: '#E87542' },
  { name: '🔥 Firebase', color: '#FFCA28' },
];

export default function Skills() {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>02 / MY SKILLS</Text>

      <Text style={styles.title}>What I work with.</Text>

      <View style={styles.grid}>
        {skills.map((skill) => (
          <View key={skill.name} style={styles.card}>
            <Text style={styles.skillName}>
              {skill.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111111',
    paddingHorizontal: 24,
    paddingVertical: 25,
  },
  number: {
    color: '#D9B45B',
    fontSize: 11,
    letterSpacing: 2,
    marginBottom: 10,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  card: {
    width: '47%',
    minHeight: 65,
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#1B1B1B',
    borderWidth: 1,
    borderColor: '#383838',
    borderRadius: 12,
  },
  skillName: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
});