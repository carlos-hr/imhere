import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface ParticipantProps {
  name: string;
  id: number;
  removeParticipant: (id: number) => void;
}

export function Participant({ name, id, removeParticipant }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => removeParticipant(id)}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
