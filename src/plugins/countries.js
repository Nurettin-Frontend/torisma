import countryCodes from "country-codes-list";
const countriesCode = [];
const list = []
countryCodes.all().forEach((country) => {
  countriesCode.push({
    value: country.countryCode ,
    title: country.countryNameEn + ' (+' + country.countryCallingCode + ')',
  });
  list.push({
    value: country.countryCode ,
    title: country.countryNameEn 
  });
});


export const countrylist = list
export default countriesCode;
