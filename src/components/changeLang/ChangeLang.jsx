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
  const colourStyles = {
    control: styles => ({
      ...styles,
      backgroundColor: '#fff',
      border: 0,
      boxShadow: 'none',
      minHeight: 23,
      '&:focus': {
        color: 'pink',
      },
    }),
    container: styles => ({ ...styles, color: 'red' }),
    indicatorSeparator: styles => ({
      ...styles,
      display: 'none',
    }),
    indicatorContainer: styles => ({
      ...styles,
      height: 23,
    }),
    input: styles => ({
      ...styles,
      paddingTop: 0,
      paddingBottom: 0,
      margin: 0,
    }),
    singleValue: styles => ({
      ...styles,
      fontSize: 16,
    }),
    valueContainer: styles => ({
      ...styles,
      padding: 0,
      fontSize: 16,
      color: '#AFAFAF',
      border: 0,
      height: 23,
    }),
    placeholder: styles => ({
      ...styles,
      color: 'red',
    }),
    menu: styles => ({
      ...styles,
      border: 0,
      boxShadow: 0,
      backgroundColor: '#fff',
    }),

    menuList: styles => ({
      ...styles,
      boxShadow: '0px 3px 6px #00000029',
      border: 0,
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isSelected ? '#F2F2F2' : '#fff',
        color: '#000000',
        cursor: isDisabled ? 'not-allowed' : 'default',
        fontSize: 14,
      };
    },
  };
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
        className="select"
        styles={colourStyles}
      />
    </StyledLangWrapper>
  );
};

export default ChangeLang;
