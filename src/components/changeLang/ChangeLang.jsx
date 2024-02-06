import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { getStoreLanguage } from '../../redux/selectors';
import { setLanguage } from '../../redux/languageSlice';

import LangIcon from '../icons/Lang';
import { StyledLangWrapper } from './StyledChangeLang';

const ChangeLang = () => {
  const currentLanguage = useSelector(getStoreLanguage);
  const [selectedOption, setSelectedOption] = useState(currentLanguage);
  console.log('selectedOption: ', selectedOption);
  const options = [
    {
      value: 'EN',
      label: 'EN',
    },
    {
      value: 'UK',
      label: 'UK',
    },
    {
      value: 'HE',
      label: 'HE',
    },
  ];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLanguage(selectedOption));
  }, [selectedOption, dispatch]);
  return (
    <StyledLangWrapper>
      <LangIcon />
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          border: 'none',
          color: '#000000',
          colors: {
            ...theme.colors,
            primary25: '#FFF',
            primary: '#F2F2F2',
          },
          control: (baseStyles, state) => ({
            ...baseStyles,
            border: 'none',
            height: '20px',
          }),
          menu: (baseStyles, state) => ({
            ...baseStyles,
            border: 'none',
          }),
        })}
      />
    </StyledLangWrapper>
  );
};

export default ChangeLang;
