import React, { useState } from 'react';
import PhotoList from './components/PhotoList'
import './App.css';

function App() {

  const [photos, setPhotos] = useState([]);
  
  async function fetchData() {
    const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=xTSAWEcp5XZ7RLtmbqfx6wCorVC6ZiY8dtMNeFT6');
    const data = await response.json();

    const transformedData = data.photos.map((res)=>{
      return {
        id: res.id,
        title: res.camera.full_name,
        imageUrl: res.img_src,
        date: res.earth_date
      }
    })
    setPhotos(transformedData);
    console.log(data.photos);

  };
  return (
    <React.Fragment>
    <section>
      <button onClick={fetchData}>Fetch Data</button>
    </section>
    <section>
      <PhotoList photos={photos}></PhotoList>
    </section>
    </React.Fragment>
  );
}

export default App;