import { Text, TouchableOpacity } from "react-native";
import { s } from "./ButtonAdd.style";

export function ButtonAdd({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={s.button}>
      <Text style={s.txt}>+ New todo</Text>
    </TouchableOpacity>
  );
}
