import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BotomSheet, { TouchableOpacity } from "@gorhom/bottom-sheet";
import { useMemo, useRef } from "react";
export default function App() {
  const bottomRef = useRef<BotomSheet>(null);
  const snapPoint = useMemo(() => ["30%", "30%"], []);

  const handleCloseAction = () => bottomRef.current?.close();
  const handleOpen = () => bottomRef.current?.expand();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/fundo.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.content}>
            <Text style={styles.h1}>
              Good coffee, Good friends, let it blends
            </Text>
            <Text style={styles.p}>
              The best grain, the finest roast, the most powerful flavor.
            </Text>
            <Image source={require("./assets/pontos.png")} />
            <TouchableOpacity style={styles.buttom} onPress={handleOpen}>
              <Text style={styles.pButtom}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <BotomSheet
          ref={bottomRef}
          index={0}
          snapPoints={snapPoint}
          backgroundStyle={{ backgroundColor: "#ffff", justifyContent: "center", alignContent: "center" }}
          enablePanDownToClose={true}
        >
          <View style={styles.contentModal}>
            <Text style={styles.pCard}>
              Começa em grande com o Day Coffe 💆🏽‍♂️⏱️❤️ 
            </Text>
            <TouchableOpacity style={styles.buttomCard} onPress={handleCloseAction}>
              <Text style={styles.pButtomCard}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </BotomSheet>
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
    position: "absolute",
    left: 20,
    right: 20, 
    top: 405, 
    bottom: 20, 
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },
  contentModal: {
    position: "absolute",
    left: 20,
    right: 20, 
    top: 10, 
    bottom: 20, 
    justifyContent: "center",
    alignItems: "center",
    gap: 30
  },
  h1: {
    color: "#F8F7FA",
    fontSize: 32,
    width: 200,
    textAlign: "center",
    fontWeight: "bold",
  },
  p: {
    color: "#DEDEDE",
    fontSize: 12,
    width: 200,
    textAlign: "center",
  },
  pCard: {
    fontWeight: "600",
    color: "#1a1a1a",
    fontSize: 18,
    textAlign: "center"
  },
  buttom: {
    width: 300,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#846046",
    justifyContent: "center",
    alignItems: "center",
  },
  buttomCard: {
    width: 300,
    height: 65,
    borderRadius: 50,
    backgroundColor: "#A6A6AA",
    justifyContent: "center",
    alignItems: "center",
  },
  pButtom: {
    fontWeight: "600",
    color: "#F8F7FA",
    fontSize: 22,
  },
  pButtomCard: {
    fontWeight: "600",
    color: "#FFF",
    fontSize: 18,
  },
});
