import React, { useCallback, useState } from 'react';
import PhotoList from './components/PhotoList'
import './App.css';
import Loading from './components/Loading';

function App() {

  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const API_KEY = `${process.env.REACT_APP_API_KEY}`

  const fetchData = useCallback( async() => {
    setIsLoading(true);
    
    const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`);
    const data = await response.json();

    const transformedData = data.photos.map((res) => {
      // console.log(res.sol);
      return {
        id: res.id,
        title: res.camera.full_name,
        rover: res.rover.name,
        imageUrl: res.img_src,
        sol: res.sol,
        date: res.earth_date
      }
    })
    setTimeout(()=>{
      setPhotos(transformedData);
      setIsLoading(false);
    },2000)
    
    
    console.log(data.photos);
  }, [API_KEY]);

  // useEffect(()=>{
  //   fetchData();
  // }, [fetchData]);


  
  return (
    <React.Fragment>
      <section className='search'>
        <h2>Fetch the <a href='https://api.nasa.gov/'>NASA</a> api by clicking this button</h2>
        <button onClick={fetchData}>Fetch Data</button>
      </section>
      <section className='result'>
        {!isLoading && photos.length > 0 && <PhotoList photos={photos} />}
        {isLoading && <Loading/>}
      </section>
    </React.Fragment>
  );
}

export default App;
