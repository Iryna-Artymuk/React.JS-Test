import React, { Suspense, useState } from 'react';
import { nanoid } from 'nanoid';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { useTranslation } from 'react-i18next';

import Button from '../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addCity, setError } from '../../redux/citiesSlice';
import {
  StyledError,
  StyledForm,
  StyledSuggestionsList,
  StylesContentWrapper,
  StylesWrapper,
} from './StyledSearch';
import { getCitiesError } from '../../redux/selectors';
const Search = () => {
  const [address, setAddress] = useState('');

  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });
  const [isValid, setValid] = useState(true);

  const [validationErrors, setValidationErrors] = useState({});

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const error = useSelector(getCitiesError);
  const handleSelect = async value => {
    try {
      if (value?.length > 0) {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        setCoordinates(latLng);
      } else {
        setValidationErrors(prev => ({ ...prev, search: 'fild is reqqired' }));

        setValid(false);

        return;
      }
    } catch (error) {}
  };

  const handelChange = value =>
  {
    dispatch(setError(''));
    setValidationErrors({});
    setValid(true);
    setAddress(value);
  };
  const handelSubmit = e => {
    e.preventDefault();
    try {
      const selectedCityData = {
        id: nanoid(),
        name: address,
        coordinates: coordinates,
      };
      if (address?.length > 0) {
        dispatch(addCity(selectedCityData));
        setAddress('');
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };
  return (
    <Suspense fallback="...loading">
      <StylesWrapper>
        <PlacesAutocomplete
          value={address}
          onChange={handelChange}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <StylesContentWrapper>
              <StyledForm onSubmit={handelSubmit}>
                <input
                  required
                  {...getInputProps({
                    placeholder: t('search.inputPlaceholder'),
                  })}
                />

                <Button type="submit" disabled={!isValid}>
                  {t('search.addButton')}
                </Button>
              </StyledForm>
              <StyledError>
                {validationErrors.search && validationErrors.search}
                {error && !validationErrors.search && error}
              </StyledError>
              {suggestions && (
                <StyledSuggestionsList>
                  {loading ? <div>{t('loading')}...</div> : null}

                  {suggestions.map(suggestion => {
                    const style = {
                      backgroundColor: suggestion.active ? '#F2F2F2' : '#fff',
                    };

                    return (
                      <li
                        key={suggestion.index}
                        {...getSuggestionItemProps(suggestion, { style })}
                      >
                        <p>{suggestion.description}</p>
                      </li>
                    );
                  })}
                </StyledSuggestionsList>
              )}
            </StylesContentWrapper>
          )}
        </PlacesAutocomplete>
      </StylesWrapper>
    </Suspense>
  );
};

export default Search;
