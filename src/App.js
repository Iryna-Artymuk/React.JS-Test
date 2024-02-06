import { GlobalStyles } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import Layout from './components/Layout/Layout';
import { useSelector } from 'react-redux';
import { getCities, getStoreLanguage } from './redux/selectors';
import ChangeLang from './components/changeLang/ChangeLang';
import Search from './components/search/Search';
import { StyledContentWrapper } from './components/Layout/StyledLayout';

function App() {
  const currentLanguage = useSelector(getStoreLanguage);
  const cities = useSelector(getCities);

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
            <div>
              {cities?.map(item => (
                <div>
                  <p>{item.name}</p>
                  <p>{item.coordinates.lat}</p>
                  <p>{item.coordinates.lng}</p>
                </div>
              ))}
            </div>
          </StyledContentWrapper>
        </main>
      </ThemeProvider>
    </Layout>
  );
}

export default App;
