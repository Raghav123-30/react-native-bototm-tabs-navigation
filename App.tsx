import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import OrdersScreen from "./screens/OrdersScreen";
import AboutScreen from "./screens/AboutScreen";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const Drawer = createDrawerNavigator();
  const Tabs = createBottomTabNavigator();
  const DrawerGroup = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0f172b",
          },
          headerTintColor: "#ccc",

          drawerContentStyle: {
            backgroundColor: "#0f172a",
          },
          drawerItemStyle: {
            backgroundColor: "#0f172a",
          },
          drawerActiveTintColor: "#f8fafc",
          drawerInactiveTintColor: "#64748b",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size}></Ionicons>
            ),
          }}
        ></Drawer.Screen>
        <Drawer.Screen
          name="Orders"
          component={OrdersScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="cart" color={color} size={size}></Ionicons>
            ),
          }}
        ></Drawer.Screen>
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="information" color={color} size={size}></Ionicons>
            ),
          }}
        ></Drawer.Screen>
        <Drawer.Screen
          name="Logout"
          component={HomeScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="log-out" color={color} size={size}></Ionicons>
            ),
          }}
        ></Drawer.Screen>
      </Drawer.Navigator>
    );
  };
  function BottomTabsGroup() {
    return (
      <Tabs.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0f172b",
          },
          headerTintColor: "#ccc",
          tabBarStyle: {
            backgroundColor: "#0f172a",
          },
          tabBarActiveTintColor: "#f8fafc",

          tabBarInactiveTintColor: "#64748b",
        }}
      >
        <Tabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="Orders"
          component={OrdersScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cart" color={color} size={size} />
            ),
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information" color={color} size={size} />
            ),
          }}
        ></Tabs.Screen>
      </Tabs.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <BottomTabsGroup />
    </NavigationContainer>
  );
}
