import { Tabs } from 'expo-router';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const COR_ATIVA = '#6B0000';
const COR_INATIVA = '#bbb';
const COR_HEADER = '#6B0000';

export default function AdegaLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: COR_HEADER },
        headerTitleStyle: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
        headerTintColor: '#fff',
        tabBarActiveTintColor: COR_ATIVA,
        tabBarInactiveTintColor: COR_INATIVA,
        tabBarStyle: { backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#ddd' },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="catalogo"
        options={{
          title: 'Catálogo',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="silverware-fork-knife" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="contato"
        options={{
          title: 'Contato',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
