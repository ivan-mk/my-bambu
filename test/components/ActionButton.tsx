import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';

interface ActionButtonProps {
  /** Ionicons name to render. Optional if `image` is provided. */
  icon?: React.ComponentProps<typeof Ionicons>['name'];
  /** PNG or other image source to render instead of an Ionicon. */
  image?: ImageSourcePropType;
  /** Label displayed under the icon */
  label: string;
  onPress?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, image, label, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className="items-center justify-center flex-1">
      <View className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-gray-800 items-center justify-center">
        {image ? (
          <Image source={image} style={{ width: 40, height: 40 }} resizeMode="contain" />
        ) : icon ? (
          <Ionicons name={icon} size={36} color="#00C853" />
        ) : null}
      </View>
      <Text className="mt-2 text-xs font-medium text-gray-600 dark:text-gray-300">{label}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton; 