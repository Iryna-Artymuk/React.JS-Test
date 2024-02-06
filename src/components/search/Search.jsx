import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import Button from '../button/Button';
import { useDispatch } from 'react-redux';
import { addCity } from '../../redux/citiesSlice';

// import { useSelector } from 'react-redux';
// import { getStoreLanguage } from '../../redux/selectors';
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
  };
  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            {/* <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p> */}

            <input {...getInputProps({ placeholder: 'Type address' })} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? '#F2F2F2' : '#fff',
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <Button type="button" onClick={handelClick}>
        Add
      </Button>
    </div>
  );
};

export default Search;
