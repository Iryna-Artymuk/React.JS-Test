import { GlobalStyles } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { useGeolocated } from 'react-geolocated';

import { theme } from './Theme';

import ChangeLang from './components/changeLang/ChangeLang';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import Layout from './components/Layout/Layout';
import Search from './components/search/Search';

import { StyledContentWrapper } from './components/Layout/StyledLayout';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { addCity } from './redux/citiesSlice';
import { useDispatch } from 'react-redux';

function App() {
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const currentCityData = {
      id: nanoid(),
      name: 'current city',
      coordinates: { lat: coords?.latitude, lng: coords?.longitude },
    };
    if (coords?.latitude && coords?.longitude) {
      dispatch(addCity(currentCityData));
    }
  }, [coords?.latitude, coords?.longitude, dispatch]);

  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <header>
          <ChangeLang />
        </header>
        <main>
          <StyledContentWrapper>
            <Search />
            <CurrentWeather />
          </StyledContentWrapper>
        </main>
      </ThemeProvider>
    </Layout>
  );
}

export default App;
