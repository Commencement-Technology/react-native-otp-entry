import { forwardRef, useImperativeHandle, useRef } from "react";
import { Keyboard, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./OtpInput.styles";
import { OtpInputProps, OtpInputRef } from "./OtpInput.types";
import { VerticalStick } from "./VerticalStick";

export const OtpInput = forwardRef<OtpInputRef, OtpInputProps>((props, ref) => {
  const {
    value,
    numberOfDigits,
    autoFocus = true,
    hideStick,
    focusColor = "#A4D0A4",
    focusStickBlinkingDuration,
    secureTextEntry = false,
    theme = {},
    isFocused,
    markBlurred,
    markFocused,
    onChangeText,
    ...otherProps
  } = props;
  const {
    inputsContainerStyle,
    pinCodeContainerStyle,
    pinCodeTextStyle,
    focusStickStyle,
    focusedPinCodeContainerStyle,
    filledPinCodeContainerStyle,
  } = theme;

  const inputRef = useRef<TextInput>(null);
  const handlePress = () => {
    // To fix bug when keyboard is not popping up after being dismissed
    if (!Keyboard.isVisible()) {
      Keyboard.dismiss();
    }
    inputRef.current?.focus();
  };

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    blur: () => {
      inputRef.current?.blur();
    },
    clear: () => {
      inputRef.current?.clear();
    },
  }));

  return (
    <>
      <View style={[styles.inputsContainer, inputsContainerStyle]}>
        {Array(numberOfDigits)
          .fill(0)
          .map((_, index) => {
            const char = value[index];
            const isLastInput = index === numberOfDigits - 1 && value.length === numberOfDigits;
            const isFocusedInput = isFocused && (index === value.length || isLastInput);

            return (
              <Pressable
                key={`${char}-${index}`}
                onPress={handlePress}
                style={[
                  styles.codeContainer,
                  pinCodeContainerStyle,
                  focusColor && isFocusedInput ? { borderColor: focusColor } : {},
                  focusedPinCodeContainerStyle && isFocusedInput
                    ? focusedPinCodeContainerStyle
                    : {},
                  filledPinCodeContainerStyle && Boolean(char) ? filledPinCodeContainerStyle : {},
                ]}
                testID="otp-input"
              >
                {isFocusedInput && !hideStick ? (
                  <VerticalStick
                    focusColor={focusColor}
                    style={focusStickStyle}
                    focusStickBlinkingDuration={focusStickBlinkingDuration}
                  />
                ) : (
                  <Text style={[styles.codeText, pinCodeTextStyle]}>
                    {char && secureTextEntry ? "•" : char}
                  </Text>
                )}
              </Pressable>
            );
          })}
      </View>
      <TextInput
        ref={inputRef}
        value={value}
        onBlur={markBlurred}
        onFocus={markFocused}
        onChangeText={onChangeText}
        maxLength={numberOfDigits}
        inputMode="numeric"
        autoFocus={autoFocus}
        style={styles.hiddenInput}
        secureTextEntry={secureTextEntry}
        // textContentType="oneTimeCode"
        // autoComplete="one-time-code"
        {...otherProps}
      />
    </>
  );
});
