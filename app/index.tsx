import { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebase';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const [tasks, setTasks] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const q = query(collection(db, 'todos'), orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const tasksData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTasks(tasksData);
    });

    // Cleanup when component unmounts
    return () => unsubscribe();
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity style={styles.addButton} onPress={() => router.push('/add-task')}>
        <Text style={styles.addButtonText}>+ Add Task</Text>
      </TouchableOpacity>

      {/* Body */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingVertical: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#4f46e5',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  taskItem: {
    backgroundColor: '#f3f4f6',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
});
