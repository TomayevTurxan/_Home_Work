import React, { useContext, useEffect } from 'react'
import { getAllAlboms } from '../api/albums';
import { AlbomContext } from '../services/content/AlbomsContext';

const Example = () => {
  let { alboms, setAlboms } = useContext(AlbomContext);
  useEffect(() => {
    getAllAlboms().then((res) => {
      // console.log(res);
      setAlboms(res);
    });
  }, []);
  console.log("albomsExamplke",alboms)

  return (
    <>Example
    </>
  )
}

export default Example