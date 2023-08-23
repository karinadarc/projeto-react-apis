import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../Constants/BASE_URL";


const useRequestData = (path) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${path}`)
      .then((response) => {
        setData(response.data);
        //  setTimeout(() => setIsLoading(false),3000);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  }, []);

  return [data, isLoading, isError];
};
export default useRequestData;