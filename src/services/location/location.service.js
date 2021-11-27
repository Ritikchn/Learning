import camelize from "camelize";
import { locations } from "./locations.mock";
export const locationReques = (searchTerm) => {
  return new Promise((resolve,reject)=>{
    const locationMock=locations[searchTerm];
    if(!locationMock){
      reject("not found");
    }
    resolve(locationMock);
  })
};
export const locationTranform = (results) => {
  const formattedResponse=camelize(results);
  const {geometry ={} }=formattedResponse.results[0];
  const {lat , lng}=geometry,location;
  return {lat , lng };

};
