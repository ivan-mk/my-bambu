import { Transaction } from '@/mock/transactions';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';

interface Props {
  transaction: Transaction;
}

export const TransactionItem: React.FC<Props> = ({ transaction }) => {
  const isIncome = transaction.type === 'income';
  // Consistent color and sign prefix for amount
  const amountColor = isIncome ? 'text-green-600' : 'text-gray-400';
  const amountSign = isIncome ? '+' : '-';

  return (
    <Animated.View
      entering={FadeInRight.duration(300)}
      className="flex-row items-center justify-between bg-white border border-gray-200 rounded-xl p-2 mb-1">
      {/* Icon */}
      {/* Status icon */}
      <View
        className={`w-9 h-9 rounded-full items-center justify-center ${isIncome ? 'bg-green-100' : 'bg-red-100'}`}>
        <Ionicons
          name={isIncome ? 'checkmark-done' : 'arrow-redo'}
          size={20}
          color={isIncome ? '#16a34a' : '#dc2626'}
        />
      </View>

      {/* Title & date */}
      <View className="flex-1 ml-2">
        <Text className="font-medium text-base" numberOfLines={1} ellipsizeMode="tail">
          {transaction.title}
        </Text>
        <Text className="text-sm text-black mt-0.5">{transaction.date}</Text>
      </View>

      {/* Amount, status & chevron */}
      <View className="flex-row items-center space-x-1">
        <View className="items-end mr-1">
          <Text className={`${amountColor} text-base font-bold`}>
            {amountSign}${Math.abs(transaction.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </Text>
          {transaction.status ? (
            <Text className="text-xs text-blue-600 font-semibold">({transaction.status})</Text>
          ) : null}
        </View>
        <Ionicons name="chevron-forward" size={16} color="#9ca3af" />
      </View>
    </Animated.View>
  );
};
