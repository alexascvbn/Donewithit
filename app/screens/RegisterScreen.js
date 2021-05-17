import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          name="name"
          autoCapitalize="characters"
          autoCorrect={false}
          icon="human-male"
          placeholder="Name"
        />
        <FormField
          name="email"
          autoCapitalize="none"
          icon="email"
          autoCorrect={false}
          placeholder="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <FormField
          name="password"
          autoCapitalize="characters"
          icon="lock"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />

        <SubmitButton title="Register" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginVertical: 30,
  },
});

export default RegisterScreen;
