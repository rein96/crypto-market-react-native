import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { CategoryListInterface } from '../types';
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from '../constants';

interface CategoryItemInterface {
  item: CategoryListInterface;
}

const CategoryItem: React.FC<CategoryItemInterface> = ({ item }) => {
  const iconName = item.iconName;
  const name = item.name;
  return (
    <TouchableOpacity
      key={item.name}
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 8,
        marginHorizontal: 4,
        borderWidth: 1,
        borderColor: colors.ui.primary,
        borderRadius: 50,
      }}
    >
      <AntDesign name={iconName} size={16} />
      <Text
        style={{
          marginLeft: 8,
          fontSize: 12,
          color: colors.text.primary,
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
