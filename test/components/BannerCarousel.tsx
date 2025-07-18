import React from 'react';
import { ActivityIndicator, Dimensions, FlatList, Image, View } from 'react-native';

import { Banner, useBanners } from '@/hooks/useBanners';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width - 32; // 16px horizontal padding on each side from HomeScreen
const ITEM_HEIGHT = ITEM_WIDTH * 9 / 16; // Maintain 16:9 aspect ratio

const BannerCarousel: React.FC = () => {
  const { banners, loading } = useBanners();

  if (loading) {
    return (
      <View style={{ height: ITEM_HEIGHT, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (banners.length === 0) {
    // Graceful fallback – nothing to render
    return null;
  }

  const renderItem = ({ item }: { item: Banner }) => (
    <Image
      source={{ uri: item.image_url }}
      style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT, borderRadius: 16 }}
      resizeMode="cover"
    />
  );

  return (
    <FlatList
      data={banners}
      keyExtractor={(item) => String(item.id)}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
      contentContainerStyle={{ paddingHorizontal: 16 }}
    />
  );
};

export default BannerCarousel; 