import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

// Ensures we add enough bottom padding when the iOS tab bar is transparent (blurred background)
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';

import ActionButton from '@/components/ActionButton';
import BannerCarousel from '@/components/BannerCarousel';
import HomeHeader from '@/components/HomeHeader';
import { TransactionItem } from '@/components/TransactionItem';
import { transactions } from '@/mock/transactions';

// Quick-action PNG icons (ensure these files exist in assets/images)
const walletIcon = require('@/assets/images/wallet.png');
const cardIcon = require('@/assets/images/card.png');
const transferIcon = require('@/assets/images/transfer.png');
const requestIcon = require('@/assets/images/request.png');

export default function HomeScreen() {
  // Height that the transparent tab bar overlaps the content (0 on Android/web)
  const bottomInset = useBottomTabOverflow();

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <HomeHeader name="Eugenio" balance={10000000} />

      {/* Scrollable content */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: bottomInset + 16 }}
        showsVerticalScrollIndicator={false}
      >
        {/* White card that overlaps header */}
        <View className="bg-white rounded-t-3xl pt-4 px-4">
          {/* Quick action buttons */}
          <View className="flex-row justify-between mb-4">
            <ActionButton image={walletIcon} label="Deposit" />
            <ActionButton image={cardIcon} label="Card" />
            <ActionButton image={transferIcon} label="Transfer" />
            <ActionButton image={requestIcon} label="Request" />
          </View>

          {/* Latest Transactions */}
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold">Latest Transactions</Text>
            <Link href="/(tabs)/history" asChild>
              <Text className="text-md font-bold text-blue-700">View All</Text>
            </Link>
          </View>

          {transactions.map((tx) => (
            <TransactionItem key={tx.id} transaction={tx} />
          ))}

          {/* Promotional Banners */}
          <View className="mt-4">
            <BannerCarousel />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
