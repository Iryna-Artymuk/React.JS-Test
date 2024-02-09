import { useSelector } from 'react-redux';

export const formatDate = (unixTime, currentLanguage) => {
  let date = new Date(unixTime * 1000);
  console.log(currentLanguage.value);
  // const locale = 'en-US';
  const locale = () => {
    if (currentLanguage.value === 'en') {
      return 'en-US';
    }
    if (currentLanguage.value === 'uk') {
      return 'uk-UK';
    }
    if (currentLanguage.value === 'he') {
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
