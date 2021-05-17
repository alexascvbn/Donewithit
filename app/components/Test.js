import React from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";
import colors from "../config/colors";
import ListItem from "../lists/ListItem";
import Screen from "./Screen";

const categories = [
  {
    id: 1,
    name: "Sport",
    description: "It is sport",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    name: "Movie",
    description: "It is Movie",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 3,
    name: "Music",
    description: "It is Music",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 4,
    name: "Game",
    description: "It is Game",
    image: require("../assets/jacket.jpg"),
  },
];

function Test(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <FlatList
          data={categories}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.name}
              subTitle={item.description}
              image={item.image}
              onPress={() =>
                Alert.alert("Will you Join?", "", [
                  { text: "yes", onPress: () => console.log("yes pressed") },
                  { text: "no", onPress: () => console.log("no pressed") },
                ])
              }
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default Test;
