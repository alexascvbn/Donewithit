import React from "react";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

function AppFormPicker({
  items,
  name,
  PickerItemComponent,
  placeholder,
  width,
  numberOfColumns,
}) {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        selectedItem={values[name]}
        onSelectItem={item => setFieldValue(name, item)}
        placeholder={placeholder}
        width={width}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
      />
      <ErrorMessage error={errors[name]} visibile={touched[name]} />
    </>
  );
}

export default AppFormPicker;
