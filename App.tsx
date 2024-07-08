import { SafeAreaView } from "react-native";
import MainPage from "./src/pages/Main";
import colors from "./src/constants/colors";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <StatusBar style="light" />
      <MainPage />
    </SafeAreaView>
  );
}
