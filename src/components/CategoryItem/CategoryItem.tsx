import React, { useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { CategoryListInterface } from '../../types';
import AntDesign from '@expo/vector-icons/AntDesign';
import createStyles from './CategoryItem.style';

interface CategoryItemInterface {
  item: CategoryListInterface;
}

const CategoryItem: React.FC<CategoryItemInterface> = ({ item }) => {
  const iconName = item.iconName;
  const name = item.name;

  const styles = useMemo(() => createStyles(), []);

  return (
    <TouchableOpacity key={item.name} style={styles.categoryContainer}>
      <AntDesign name={iconName} size={16} />
      <Text style={styles.categoryText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
