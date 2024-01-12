import { useCallback, useRef, useState } from "react";
import { Keyboard, TextInput } from "react-native";
import { OtpInputProps } from "./OtpInput.types";

export const useOtpInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const markFocused = useCallback(() => setIsFocused(true), []);
  const markBlurred = useCallback(() => setIsFocused(false), []);

  return {
    models: { isFocused },
    actions: { markFocused, markBlurred },
  };
};
