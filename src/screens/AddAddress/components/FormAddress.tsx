import { colorBlack, colorGrayStrong } from 'assets/colors';
import { bold, book, fontL, fontM } from 'assets/tokens';
import { Button, Input, Text } from 'components';
import { useFormik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

const styles = StyleSheet.create({
  formTitle: {
    fontSize: fontL,
    color: colorBlack,
    fontWeight: bold,
    marginBottom: 3,
  },
  formSubtitle: {
    fontSize: fontM,
    color: colorGrayStrong,
    fontWeight: book,
    marginBottom: 12,
  },
  formControlCnt: {
    width: '100%',
    marginBottom: 26,
  },
});

const FormAddress = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
  const { t } = useTranslation();

  const onSubmitHandler = (values: any) => {
    onSubmit(values);
  };

  const initialValues = {
    aditionalInfo: '',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => onSubmitHandler(values),
    enableReinitialize: true,
    validateOnMount: true,
    validationSchema: Yup.object({
      aditionalInfo: Yup.string().max(50, t('errors.max')),
    }),
  });

  return (
    <>
      <Text style={styles.formTitle}>{t('addAddress.formTitle')}</Text>
      <Text style={styles.formSubtitle}>{t('addAddress.formSubtitle')}</Text>

      <View style={styles.formControlCnt}>
        <Input
          value={formik.values.aditionalInfo}
          onChange={(e) => formik.setFieldValue('aditionalInfo', e.nativeEvent.text)}
          onBlur={formik.handleBlur('aditionalInfo')}
          touched={formik.touched.aditionalInfo}
          error={formik.errors.aditionalInfo}
          style={{ height: 100 }}
          multiline
        />
      </View>

      <Button
        accessibilityHint={t('addAddress.button')}
        accessibilityLabel={t('addAddress.button')}
        onPress={() => formik.submitForm()}
        testID="btn-submit"
        disabled={!formik.isValid}
      >
        {t('addAddress.button')}
      </Button>
    </>
  );
};

export default FormAddress;
