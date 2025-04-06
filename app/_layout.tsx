import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'My_ToDoList' }} />
      <Stack.Screen name="login" options={{ title: 'Login' }} />
      <Stack.Screen name="add-task" options={{ title: 'Add Task' }} />
    </Stack>
  );
}
