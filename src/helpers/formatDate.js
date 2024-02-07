import { useSelector } from 'react-redux';

export const formatDate = (unixTime, currentLanguage) => {
  // console.log('currentLanguage: ', currentLanguage);
  let date = new Date(unixTime * 1000);

  // const locale = 'en-US';
  const locale = () => {
    if (currentLanguage === 'EN') {
      return 'en-US';
    }
    if (currentLanguage === 'UK') {
      return 'uk-UK';
    }
    if (currentLanguage === 'HE') {
      return 'he-HE';
    } else {
      return 'en-US';
    }
  };

  // const locale = 'en-US';

  // return formattedDate;
  let dateString = date.toLocaleString(locale(), {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });
  return dateString;
};
