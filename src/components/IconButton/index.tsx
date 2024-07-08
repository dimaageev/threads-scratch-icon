import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { IconNameType } from "../../types";

interface IconButtonProps {
  name: IconNameType;
  onPress: () => void;
  active?: boolean;
}

const IconButton: FC<IconButtonProps> = ({ name, onPress, active }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        opacity: active ? 0.7 : 1,
      }}
    >
      <Ionicons name={name} size={28} color="white" />
    </Pressable>
  );
};

export default IconButton;
