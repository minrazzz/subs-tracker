import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Subscriptions = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>Subscriptions : {id}</Text>
    </View>
  );
};

export default Subscriptions;
