import { Image, Text, TouchableOpacity } from "react-native";
import { s } from "./CardTodo.style";
import checkImg from "../../assets/check.png";

export function CardTodo({ todo }) {
  return (
    <TouchableOpacity style={s.card}>
      <Text style={s.txt}>{todo.title}</Text>
      <Image style={s.img} source={checkImg} />
    </TouchableOpacity>
  );
}
