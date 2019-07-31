import { useState, useEffect } from 'react';


export const useFetch = (url) => {
  
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    
    setState(state => ({ data: state.data, loading: true }))
    const grabData = async () => {
      const res = await fetch(url)
      
      if(!res.ok){
        setState({country: "United States", loading: false})//default to United States if error
      }
      const data = await res.json();
      setState({country: data.country ||'United States ', loading: false})//default to United States if no country data.
    }
    grabData(); 
  }, [url, setState])

  return state
}