import { COLORS, FONTS } from "@/constants/theme";
import React from "react";
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  variant?: "primary" | "secondary" | "outline" | "tertiary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: TextStyle;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  fullWidth = true,
  style,
  textStyle,
}) => {
  const getBackgroundColor = () => {
    if (disabled) return COLORS.lightGray3;
    switch (variant) {
      case "primary":
        return COLORS.primaryDarkGreen;
      case "secondary":
        return COLORS.dustyMint;
      case "tertiary":
        return COLORS.charcoal;
      case "outline":
        return "transparent";
      default:
        return COLORS.primaryDarkGreen;
    }
  };

  const getTextColor = () => {
    if (disabled) return COLORS.textGray;
    switch (variant) {
      case "primary":
        return COLORS.white;
      case "secondary":
        return COLORS.primaryDarkGreen;
      case "outline":
        return COLORS.primaryDarkGreen;
      default:
        return COLORS.white;
    }
  };

  const getHeight = () => {
    switch (size) {
      case "small":
        return 40;
      case "medium":
        return 56;
      case "large":
        return 64;
      default:
        return 56;
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        {
          backgroundColor: getBackgroundColor(),
          height: getHeight(),
          width: fullWidth ? "100%" : "auto",
          borderWidth: variant === "outline" ? 2 : 0,
          borderColor: COLORS.primaryDarkGreen,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === "primary" ? COLORS.white : COLORS.primaryDarkGreen}
        />
      ) : (
        <Text
          style={[
            styles.text,
            {
              color: getTextColor(),
              fontSize: size === "small" ? 16 : 18,
            },
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    fontFamily: FONTS.medium,
    textAlign: "center",
  },
});
