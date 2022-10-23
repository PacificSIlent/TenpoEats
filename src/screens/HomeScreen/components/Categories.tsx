import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { Category } from './category';
import Section from './Section';

const styles = StyleSheet.create({
  categories: {
    marginBottom: 40,
  },
});

const Categories = () => {
  const { t } = useTranslation();

  return (
    <Section style={styles.categories} title={t('home.categories.title')}>
      <Category name="HAMBURGUESAS" categoryId="cate_001" />
      <Category name="ITALIANA" categoryId="cate_002" />
      <Category name="PIZZAS" categoryId="cate_003" />
    </Section>
  );
};

export default Categories;
