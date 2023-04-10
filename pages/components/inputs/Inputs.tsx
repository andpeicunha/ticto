import React from 'react';

import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const defaultMaskOptions = {
  prefix: '',
  suffix: '',
  includeThousandsSeparator: false,
  thousandsSeparatorSymbol: '',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 8, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false,
};

export const CurrencyInput = ({ ...inputProps }) => {
  const currencyMask = createNumberMask(defaultMaskOptions);
  return <MaskedInput mask={currencyMask} {...inputProps} />;
};
