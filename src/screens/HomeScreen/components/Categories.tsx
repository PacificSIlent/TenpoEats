import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Category } from './category';
import Section from './Section';

const styles = StyleSheet.create({
  categories: {
    marginBottom: 40,
  },
});

const Categories = () => {
  const { t } = useTranslation();

  const categories = useSelector((state: RootState) => state.global.dashboardData.categories);

  return (
    <Section style={styles.categories} title={t('home.categories.title')}>
      {categories.map((category, key) => (
        <Category name={category.name} categoryId={category.id} key={key} />
      ))}
    </Section>
  );
};

export default Categories;
