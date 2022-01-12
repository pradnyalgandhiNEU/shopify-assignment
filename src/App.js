import React, { useCallback, useState } from 'react';
import PhotoList from './components/PhotoList'
import './App.css';

function App() {

  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const API_KEY = `${process.env.REACT_APP_API_KEY}`

  const fetchData = useCallback( async() => {
    setIsLoading(true);
    const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`);
    const data = await response.json();

    const transformedData = data.photos.map((res) => {
      return {
        id: res.id,
        title: res.camera.full_name,
        imageUrl: res.img_src,
        date: res.earth_date
      }
    })
    setPhotos(transformedData);
    setIsLoading(false);
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
        {!isLoading && photos.length === 0 && <p>Found no Photos </p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
