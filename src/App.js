import { GlobalStyles } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { useGeolocated } from 'react-geolocated';

import { theme } from './Theme';

import ChangeLang from './components/changeLang/ChangeLang';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import Layout from './components/Layout/Layout';
import Search from './components/search/Search';

import { StyledContentWrapper } from './components/Layout/StyledLayout';
import { Suspense, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { addCurrentCity } from './redux/citiesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getCities } from './redux/selectors';
import Spinner from './components/spinner/Spinner';

function App() {
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    // userDecisionTimeout: 5000,
  });
  const cities = useSelector(getCities);
  console.log('cities : ', cities);
  const dispatch = useDispatch();

  useEffect(() => {
    const currentCityData = {
      id: nanoid(),
      name: 'current city',
      coordinates: { lat: coords?.latitude, lng: coords?.longitude },
    };

    if (coords?.latitude && coords?.longitude) {
      dispatch(addCurrentCity(currentCityData));
    }
  }, [coords?.latitude, coords?.longitude, dispatch]);

  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </Layout>
  );
}

export default App;
