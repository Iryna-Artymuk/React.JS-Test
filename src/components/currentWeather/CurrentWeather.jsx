
import { StyledWeatherList } from './StyledCurrentWeather';
import Card from '../card/Card';
import { useSelector } from 'react-redux';
import { getCities } from '../../redux/selectors';


const CurrentWeather = () => {
  const cities = useSelector(getCities);
  return (
    <>
      {cities?.length > 0 && (
        <StyledWeatherList>
          {cities?.map(city => (
            <Card
              key={city.id}
              data={city}
            />
          ))}
        </StyledWeatherList>
      )}
    </>
  );
};

export default CurrentWeather;
