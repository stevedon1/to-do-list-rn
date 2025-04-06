import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function HomeScreen() {
  const router = useRouter();
  const [tasks, setTasks] = useState<string[]>([
    'Learn Firebase',
    'Build Todo App',
    'Sleep a little 😴',
  ]);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>My Todos</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.push('/add-task')}
        >
          <Text style={styles.addButtonText}>+ Add Task</Text>
        </TouchableOpacity>
      </View>

      {/* BODY */}
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.taskList}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#3b82f6', // blue
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
  },
  addButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  taskList: {
    gap: 10,
  },
  taskItem: {
    padding: 15,
    backgroundColor: '#f3f4f6',
    borderRadius: 10,
  },
});
