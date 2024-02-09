import { GlobalStyles } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';


import ChangeLang from './components/changeLang/ChangeLang';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import Layout from './components/Layout/Layout';
import Search from './components/search/Search';

import { StyledContentWrapper } from './components/Layout/StyledLayout';
function App() {


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
