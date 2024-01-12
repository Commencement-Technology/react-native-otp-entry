import { ColorValue, TextInputProps, TextStyle, ViewStyle } from "react-native";

export interface OtpInputProps extends TextInputProps {
  value: string;
  numberOfDigits: number;
  focusColor?: ColorValue;
  onTextChange?: (text: string) => void;
  theme?: Theme;
  secureTextEntry: boolean;
  isFocused: boolean;
  markFocused: () => void;
  markBlurred: () => void;
}

export interface OtpInputRef {
  focus: () => void;
  blur: () => void;
  clear: () => void;
}

export interface Theme {
  inputsContainerStyle?: ViewStyle;
  pinCodeContainerStyle?: ViewStyle;
  filledPinCodeContainerStyle?: ViewStyle;
  pinCodeTextStyle?: TextStyle;
  focusedPinCodeContainerStyle?: ViewStyle;
}
