import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Linking,
} from 'react-native';

type ProjectCardProps = {
  number: string;
  title: string;
  description: string;
  image: string;
  technology: string;
  link?: string;
};

export default function ProjectCard({
  number,
  title,
  description,
  image,
  technology,
  link,
}: ProjectCardProps) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.number}>{number}</Text>

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.description}>
          {description}
        </Text>

        <Text style={styles.technology}>
          {technology}
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => {
            if (link) {
              Linking.openURL(link);
            }
          }}
        >
          <Text style={styles.buttonText}>
            View Project ↗
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1B1B1B',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#383838',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 170,
  },
  content: {
    padding: 18,
  },
  number: {
    color: '#D9B45B',
    fontSize: 12,
    marginBottom: 10,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    color: '#BBBBBB',
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 12,
  },
  technology: {
    color: '#D9B45B',
    fontSize: 12,
    marginBottom: 15,
  },
  button: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#D9B45B',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#D9B45B',
    fontSize: 12,
    fontWeight: 'bold',
  },
});