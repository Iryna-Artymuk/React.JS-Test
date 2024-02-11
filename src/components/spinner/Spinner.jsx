import BarLoader from 'react-spinners/BarLoader';
const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: '#FFA25B',
};
const Spinner = () => {
  return (
    <BarLoader
      color={'#FFA25B'}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;
