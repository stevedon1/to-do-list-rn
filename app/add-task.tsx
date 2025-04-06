import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function AddTaskScreen() {
  const [task, setTask] = useState('');
  const router = useRouter();

  const handleAddTask = () => {
    if (task.trim() === '') return;

    console.log('New Task:', task);
    // Later we'll upload this to Firestore 🔥

    setTask('');
    router.back(); // go back to Home after adding
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a New Task 📝</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your task..."
        value={task}
        onChangeText={setTask}
      />

      <Button title="Save Task" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    marginBottom: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 24,
    fontSize: 18,
  },
});
