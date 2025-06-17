import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primaryDarkGreen: "#1E3D2F",
  backgroundCream: "#F9F7F1",
  softSageGreen: "#BFD8B8",
  dustyMint: "#A3C6A4",
  charcoal: "#2E2E2E",

  black: "#000000",
  white: "#FFFFFF",

  textGray: "#858585",
  textGray2: "#797979",

  borderColor: "#C9C9C9",
  lightGray: "#F9F9F9",
  lightGray2: "#EFEFF0",
  lightGray3: "#D4D5D6",
  lightGray4: "#7D7E84",
};

export const SIZES = {
  padding: 20,
  width,
  height,
};

export const FONTS = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  bold: "Poppins-Bold",
  semiBold: "Poppins-SemiBold",
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
