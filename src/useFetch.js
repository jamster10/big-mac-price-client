import { useState, useEffect } from 'react';


export const useFetch = (url) => {
  
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    
    setState(state => ({ data: state.data, loading: true }))
    const grabData = async () => {
      const res = await fetch(url)
      
      if(!res.ok){
        setState({status: "error", loading: false})
      }
      const data = await res.json();
      console.log(data)
      setState({country: data.country, loading: false})
    }
    grabData(); 
  }, [url, setState])

  return state
}