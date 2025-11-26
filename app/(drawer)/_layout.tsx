import { Drawer } from "expo-router/drawer";
import { Image } from "react-native";

export default function DrawerLayout() {
  return (
    <Drawer
  screenOptions={{
    headerStyle: { backgroundColor: '#000' },
    headerTintColor: '#fff',
    headerTitle: () => (
      <Image
        source={require('../../assets/images/logo.jpg')}
        style={{ width: 120, height: 40, resizeMode: 'contain' }}
      />
    ),
  }}
>

      <Drawer.Screen name="index" options={{ title: "Home" }} />
      <Drawer.Screen name="explore" options={{ title: "Explore" }} />
    </Drawer>
  );
}
