import React, { useEffect, useState } from 'react';
import LangIcon from '../icons/Lang';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { getStoreLanguage } from '../../redux/selectors';
import { setLanguage } from '../../redux/languageSlice';

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
    <div>
      <LangIcon />
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        // theme={theme => ({
        //   ...theme,
        //   borderRadius: 0,
        //   colors: {
        //     ...theme.colors,
        //     primary25: 'pink',
        //     primary: '#78788c',
        //   },
        // })}
      />
    </div>
  );
};

export default ChangeLang;
