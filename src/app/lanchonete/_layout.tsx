import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const COR_ATIVA = '#1976D2';
const COR_INATIVA = '#bbb';
const COR_HEADER = '#1a1f36';

export default function LanchoneteLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: COR_HEADER },
        headerTitleStyle: { color: '#fff', fontWeight: 'bold' },
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
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cardapio"
        options={{
          title: 'Cardápio',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="menu-book" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pedido"
        options={{
          href: null,
          tabBarStyle: { display: 'none' },
          headerStyle: { backgroundColor: COR_HEADER },
          headerTitleStyle: { color: '#fff', fontWeight: 'bold' },
          title: 'Pedido',
        }}
      />
    </Tabs>
  );
}
