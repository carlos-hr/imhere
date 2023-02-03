import { useState } from "react";
import {
  FlatList,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

interface ParticipantList {
  key: number;
  name: string;
}

export function Home() {
  const [participantsList, setParticipantsList] = useState<ParticipantList[]>(
    []
  );
  const [newParticipant, setNewParticipant] = useState("");

  function handleNewParticipantInput(name: string) {
    setNewParticipant(name);
  }

  function handleAddParticipant() {
    if (newParticipant.length > 0) {
      setParticipantsList((state) => [
        ...state,
        { key: Math.random(), name: newParticipant },
      ]);
      setNewParticipant("");
      return;
    }

    return;
  }

  function handleRemoveParticipant(id: number) {
    const newList = participantsList.filter(
      (participant) => participant.key !== id
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
        keyExtractor={(item) => item.key.toString()}
        renderItem={({ item }) => (
          <Participant
            id={item.key}
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
