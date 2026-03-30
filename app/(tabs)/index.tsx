import { Text } from "react-native";
// const SafeAreaView = styled(RNSafeAreaView);

export default function Index() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-foreground">
        Welcome to Nativewind!
      </Text>
    </SafeAreaView>
  );
}
