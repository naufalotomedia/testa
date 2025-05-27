import { TextInput, View, StyleSheet } from "react-native";
import React from "react";
import TextComponents from "./text";
import { getResponsiveSize } from "@utils/responsive";
import { colors } from "@utils/color";
import { spacing } from "@utils/spacing";

interface TextInputComponentsProps {
  placeholder?: string;
  textForm: string;
  handleOnChangeText?: any;
  secureTextEntry?: boolean;
  error?: boolean;
  value?: any;
  typeKeyboard?: any;
  editable?: boolean;
  numberOfLines?: number;
  backgroundColor?: string;
  search?: boolean;
  searchSubmit?: any;
}

export default function TextInputComponents({
  placeholder,
  handleOnChangeText,
  secureTextEntry,
  error,
  textForm,
  value,
  typeKeyboard,
  editable,
  numberOfLines,
  backgroundColor,
  search,
  searchSubmit,
}: TextInputComponentsProps) {
  return (
    <View style={styles.container}>
      <TextComponents text={textForm || ""} />
      {error && (
        <TextComponents
          text={`${textForm} tidak boleh kosong`}
          fontSize={getResponsiveSize(12)}
          color={colors.red}
        />
      )}
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: backgroundColor,
            height: numberOfLines
              ? getResponsiveSize(12 * numberOfLines)
              : getResponsiveSize(50),
            padding: numberOfLines ? spacing.normal : 0,
            textAlignVertical: numberOfLines ? "top" : "center",
          },
        ]}
        editable={editable}
        value={value}
        secureTextEntry={secureTextEntry}
        cursorColor={colors.orange}
        placeholder={placeholder || ""}
        onChangeText={handleOnChangeText}
        keyboardType={typeKeyboard || "default"}
        multiline={numberOfLines ? true : false}
        numberOfLines={numberOfLines}
        submitBehavior="submit"
        onSubmitEditing={() => {
          if (search) {
            searchSubmit();
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.small, // Add some spacing between inputs
  },
  input: {
    borderWidth: 1,
    borderRadius: getResponsiveSize(spacing.small),
    paddingHorizontal: getResponsiveSize(spacing.normal),
    borderColor: colors.lightgrey,
    color: colors.black,
    fontFamily: "Poppins-Regular",
    fontSize: getResponsiveSize(13),
    marginTop: spacing.tiny,
  },
});
