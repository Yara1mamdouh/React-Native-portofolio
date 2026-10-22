import { View, Text, StyleSheet } from 'react-native';
import ProjectCard from './ProjectCard';

const projects = [
  {
    number: '01',
    title: 'Food Delivery App',
    description: 'A mobile app for ordering food.',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800',
    technology: 'React Native  •  Firebase',
  },
  {
    number: '02',
    title: 'E-Commerce App',
    description: 'A simple online shopping experience.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    technology: 'React Native  •  API',
  },
  {
    number: '03',
    title: 'Task Manager',
    description: 'An app to organize daily tasks.',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
    technology: 'React Native  •  JavaScript',
  },
];

export default function Projects() {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>
        03 / SELECTED WORK
      </Text>

      <Text style={styles.title}>My projects.</Text>

      {projects.map((project) => (
        <ProjectCard
          key={project.number}
          number={project.number}
          title={project.title}
          description={project.description}
          image={project.image}
          technology={project.technology}
        />
      ))}
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
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 22,
  },
});