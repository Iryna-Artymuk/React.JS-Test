export const formatDate = (unixTime, currentLanguage) => {
  let date = new Date(unixTime * 1000);
 
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
