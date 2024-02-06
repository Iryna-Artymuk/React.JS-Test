import { GlobalStyles } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import Layout from './components/Layout/Layout';
import { useSelector } from 'react-redux';
import { getStoreLanguage } from './redux/selectors';
import ChangeLang from './components/changeLang/ChangeLang';

function App() {
  const currentLanguage = useSelector(getStoreLanguage);
  console.log('currentLanguag: ', currentLanguage);
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <header>
          <ChangeLang />
        </header>
        <main></main>
      </ThemeProvider>
    </Layout>
  );
}

export default App;
