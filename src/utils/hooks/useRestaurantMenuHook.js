import {useState, useEffect} from 'react'
import { MENU_API } from '../constants';

function useRestaurantMenuHook(resId) {
    const [resInfo, setResInfo] = useState(null)
    const fetchData = async () => {
        const response = await fetch(MENU_API + resId);
        const json = await response?.json();
        setResInfo(json?.data);
      };
      useEffect(() => {
        fetchData();
      }, [resId]); 

  return (

    resInfo
  )
}

export default useRestaurantMenuHook