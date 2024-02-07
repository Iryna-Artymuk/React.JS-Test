import React from 'react';
import { StyledCard, StyledCloseButton } from './StyledCard';
import { deleteCity } from '../../redux/citiesSlice';
import { useDispatch } from 'react-redux';

const Card = ({ data }) => {
  console.log('data: ', data);
  const dispatch = useDispatch();
  const handelClick = id => {
    console.log('id : ', id);
    dispatch(deleteCity(id));
  };
  return (
    <li>
      <StyledCard>
        <StyledCloseButton onClick={() => handelClick(data?.id)}>
          <div></div>
          <div></div>
        </StyledCloseButton>
        <div>{data?.name}</div>
        <div>Sunny</div>
        <div>Fri, 19 February, 10:17</div>
        <div>прогноз</div>
        <div>
          <div>
            <span>+18</span>
            <span>°C</span>
            <span>°F</span>
          </div>
          <div>Feels like: +22 °C</div>
        </div>
        <div>
          <span>Wind: </span>
          <span>16 m/ss</span>
        </div>
        <div>
          <span>Humidity: </span>
          <span>13%</span>
        </div>
        <div>
          <span>Pressure: </span>
          <span>600Pa</span>
        </div>
      </StyledCard>
    </li>
  );
};

export default Card;
