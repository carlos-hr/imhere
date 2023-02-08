import { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

interface ParticipantList {
  id: number;
  name: string;
}

export function Home() {
  const [participantsList, setParticipantsList] = useState<ParticipantList[]>(
    []
  );
  const [newParticipant, setNewParticipant] = useState("");

  function generateId() {
    return Math.floor(Math.random() + new Date().getTime());
  }

  function handleNewParticipantInput(name: string) {
    setNewParticipant(name);
  }

  function handleAddParticipant() {
    const participantsName = participantsList.map(
      (participant) => participant.name
    );

    if (newParticipant.length === 0) {
      return Alert.alert(
        "Inserir nome",
        "Favor inserir um nome para o novo usuário"
      );
    } else if (participantsName.includes(newParticipant)) {
      return Alert.alert(
        "Nome já cadastrado",
        "Favor inserir um nome único para o novo usuário"
      );
    }

    const id = generateId();

    setParticipantsList((state) => [...state, { id, name: newParticipant }]);
    setNewParticipant("");

    return;
  }

  function handleRemoveParticipant(id: number) {
    const newList = participantsList.filter(
      (participant) => participant.id !== id
    );

    setParticipantsList(newList);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, dia de mês de 2023</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          defaultValue={newParticipant}
          onChangeText={handleNewParticipantInput}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={participantsList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Participant
            id={item.id}
            name={item.name}
            removeParticipant={handleRemoveParticipant}
          />
        )}
        ListEmptyComponent={() => {
          return (
            <Text style={styles.listEmptyText}>
              Ninguém chegou no evento ainda? Adicione participantes a sua lista
              de presença
            </Text>
          );
        }}
      />
    </View>
  );
}
