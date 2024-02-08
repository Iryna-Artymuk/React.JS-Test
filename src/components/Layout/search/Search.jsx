import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import Button from '../../button/Button';
import { useDispatch } from 'react-redux';
import { addCity } from '../../../redux/citiesSlice';
import {
  StyledSuggestionsList,
  StylesContentWrapper,
  StylesSearchWrapper,
  StylesWrapper,
} from './StyledSearch';
const Search = ({ onSearchChange }) => {
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });
  const dispatch = useDispatch();
  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };
  const handelClick = () => {
    const selectedCityData = {
      id: nanoid(),
      name: address,
      coordinates: coordinates,
    };
    dispatch(addCity(selectedCityData));
    setAddress('');
  };
  return (
    <StylesWrapper>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <StylesContentWrapper>
            <StylesSearchWrapper>
              <input {...getInputProps({ placeholder: 'Type address' })} />
            </StylesSearchWrapper>

            {suggestions && (
              <StyledSuggestionsList>
                {loading ? <div>...loading</div> : null}

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
      <Button type="button" onClick={handelClick}>
        Add
      </Button>
    </StylesWrapper>
  );
};

export default Search;
