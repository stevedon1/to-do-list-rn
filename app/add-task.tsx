import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { collection, addDoc } from 'firebase/firestore'
import { db } from "@/firebase"

export default function AddTaskScreen() {
  const [task, setTask] = useState('');
  const router = useRouter();

  const handleAddTask = async() => {
    if (task.trim() === '') return;
    try {
      await addDoc(collection(db, 'todos'), {
        title: task,
        createdAt: new Date()
      });

      setTask('')
      router.push('/'); // Go back to Home after adding
    } catch (error) {
      console.error('Error adding task:', error);
    }
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
