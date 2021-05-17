import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "../forms/ErrorMessage";

function AppFormField({ name, width, ...otherProps }) {
  const {
    setFieldValue,
    setFieldTouched,
    errors,
    touched,
    values,
  } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={text => setFieldValue(name, text)}
        value={values[name]}
        styles={styles.text}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visibile={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
  },
});

export default AppFormField;
