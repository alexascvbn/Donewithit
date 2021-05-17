import React from "react";
import { StyleSheet } from "react-native";
import AppText from "../AppText";

function ErrorMessage({ error, visibile }) {
  if (!visibile || !error) return null;

  return <AppText style={styles.error}>{error} </AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
    marginLeft: 10,
  },
});

export default ErrorMessage;
