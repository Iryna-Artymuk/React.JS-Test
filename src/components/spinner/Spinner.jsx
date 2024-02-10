import BarLoader from 'react-spinners/BarLoader';
const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: '#459DE9',
};
const Spinner = () => {
  return (
    <BarLoader
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;
