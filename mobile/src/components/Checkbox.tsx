import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import Animated, { RollInRight, ZoomIn, ZoomOut } from "react-native-reanimated";

interface CheckboxProps extends TouchableOpacityProps {
  checked?: boolean;
  title: string;
}

export function Checkbox({ checked = false, title, ...rest }: CheckboxProps) {
  return (
    <TouchableOpacity
      activeOpacity={.7}
      className='flex-row mb-2 items-center'
      {...rest}
    >
      {
        checked
          ?
          <Animated.View
            entering={ZoomIn}
            exiting={ZoomOut}
            className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center"
          >
            <Feather
              name="check"
              color={colors.white}
              size={20}
            />
          </Animated.View>
          :
          <View className="h-8 w-8 bg-zinc-900 rounded-lg" />
      }

      <Text className="text-white text-base ml-3 font-semibold">
        {title}
      </Text>
    </TouchableOpacity>
  )
}