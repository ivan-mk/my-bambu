import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface HomeHeaderProps {
  name: string;
  balance: number;
  currency?: string;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ name, balance, currency = 'COP' }) => {
  const [showBalance, setShowBalance] = useState(true);

  const formattedFull = balance.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const [integerPart, decimalPart] = formattedFull.split('.');

  return (
    <SafeAreaView
      edges={["top"]}
      className="bg-[#00154F] pt-5 pb-2 px-4 items-center">
      {/* Greeting & icons overlay */}
      <View className="relative items-center w-full">
        {/* Absolute icons row aligned with greeting */}
        <View className="absolute inset-x-0 px-6 flex-row justify-between items-center">
          <Image
            source={require('@/assets/images/icon.png')}
            style={{ width: 26, height: 26 }}
            resizeMode="contain"
          />
          <Ionicons name="notifications-outline" size={28} color="#FFFFFF" />
        </View>

        {/* Greeting */}
        <Text className="text-white text-xs text-center">Welcome back</Text>
        <Text className="text-white text-lg font-semibold mb-2 text-center">{name}</Text>
      </View>

      {/* Balance */}
      <View className="flex-row items-end justify-center mb-1">
        {showBalance ? (
          <>
            <Text className="text-green-400 text-3xl font-extrabold">${integerPart}</Text>
            <Text className="text-green-400 text-3xl font-extrabold">.</Text>
            <Text className="text-green-400 text-xl font-extrabold">{decimalPart}</Text>
            <Text className="text-green-400 text-xl font-semibold ml-2">{currency}</Text>
          </>
        ) : (
          <Text className="text-green-400 text-3xl font-extrabold">********</Text>
        )}
        <Pressable onPress={() => setShowBalance((prev) => !prev)}>
          <View style={{ position: 'relative', marginLeft: 8 }}>
            <Ionicons
              name={showBalance ? 'eye-outline' : 'eye-off-outline'}
              size={22}
              color={showBalance ? '#00C853' : '#FFFFFF'}
            />
            {showBalance && (
              <View
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: 6,
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: '#00C853',
                  transform: [{ translateX: -3 }, { translateY: -3 }],
                }}
              />
            )}
          </View>
        </Pressable>
      </View>
      <Text className="text-green-400 mb-3 text-xs text-center">Current Balance</Text>
    </SafeAreaView>
  );
};

export default HomeHeader; 