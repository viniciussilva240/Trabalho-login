import 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { MaterialIcons } from '@expo/vector-icons';

const COR_HEADER = '#1a1f36';

export default function LanchoneteDrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: { backgroundColor: COR_HEADER },
        headerTitleStyle: { color: '#fff', fontWeight: 'bold' },
        headerTintColor: '#fff',
        drawerActiveTintColor: '#1976D2',
        drawerInactiveTintColor: '#555',
        drawerStyle: { backgroundColor: '#f5f5f5' },
        swipeEnabled: true,
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: 'Home',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="cardapio"
        options={{
          title: 'Cardápio',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="menu-book" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="pedido"
        options={{
          title: 'Pedido',
          drawerItemStyle: { display: 'none' },
        }}
      />
    </Drawer>
  );
}
