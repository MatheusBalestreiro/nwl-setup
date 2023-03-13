import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

export function HabitsEmpty() {
  const { navigate } = useNavigation()

  return (
    <Text className="text-zinc-400 text-base text-center">
      Você ainda não monitorando nenhum hábito, {' '}
      <Text 
      onPress={() => navigate('NewHabit')}
      className="text-violet-400 text-base underline active:text-violet-500"
      >
        crie um novo hábito.
      </Text>
    </Text>
  )
}