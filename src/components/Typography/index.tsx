import { FC } from "react";
import { Text, StyleSheet, TextStyle } from "react-native";
import colors from "../../constants/colors";

interface TypographyProps {
  label: string;
  variant: "primary" | "secondary";
  style?: TextStyle;
}

const Typography: FC<TypographyProps> = ({ label, variant, style }) => {
  return <Text style={[styles[variant], style]}>{label}</Text>;
};

const styles = StyleSheet.create({
  primary: {
    color: colors.primaryLabel,
    fontSize: 22,
  },
  secondary: {
    color: colors.accentLabel,
    fontSize: 16,
  },
});

export default Typography;
