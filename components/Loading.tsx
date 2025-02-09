import React, { useContext } from "react";
import { View, Modal, ActivityIndicator, StyleSheet } from "react-native";

type LoadingProps = {
  visible: boolean;
};

const Loading = ({ visible }: LoadingProps) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={[styles.container]}>
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
