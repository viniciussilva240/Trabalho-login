import { Stack } from 'expo-router';

export default function LanchoneteLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#1a1f36' },
        headerTitleStyle: { color: '#fff', fontWeight: 'bold' },
        headerTintColor: '#fff',
      }}
    />
  );
}
