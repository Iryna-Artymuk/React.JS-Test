import { GlobalStyles } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import Layout from './components/Layout/Layout';
import { useSelector } from 'react-redux';
import { getCities, getStoreLanguage } from './redux/selectors';
import ChangeLang from './components/changeLang/ChangeLang';
import Search from './components/search/Search';
import { StyledContentWrapper } from './components/Layout/StyledLayout';
import CurrentWeather from './components/currentWeather/CurrentWeather';

function App() {
  const currentLanguage = useSelector(getStoreLanguage);

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
