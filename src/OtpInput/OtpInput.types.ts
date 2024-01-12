import { ColorValue, TextInputProps, TextStyle, ViewStyle } from "react-native";

export interface OtpInputProps extends TextInputProps {
  value: string;
  numberOfDigits: number;
  autoFocus?: boolean;
  focusColor?: ColorValue;
  onTextChange?: (text: string) => void;
  // onFilled?: (text: string) => void;
  hideStick?: boolean;
  focusStickBlinkingDuration?: number;
  secureTextEntry?: boolean;
  theme?: Theme;
  // handlePress: () => void;
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
  focusStickStyle?: ViewStyle;
  focusedPinCodeContainerStyle?: ViewStyle;
}
