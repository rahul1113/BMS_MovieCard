import { useEffect, useState } from "react";
import Card from "./Card/Card";
import { TrailerPlayer } from "./TrailerPlayer/TrailerPlayer";
import './ParentCard.css'

const ParentCard = (props) => {
  const [movieList, setMovieList] = useState([]);
  const [view, setView] = useState({})
  const [indexItem, setIndexItem] = useState('')
  useEffect(() => {
    fetch("https://peaceful-forest-62260.herokuapp.com/")
      .then((response) => response.json())
      .then((data) =>
        setMovieList(Object.values(data.moviesData ? data.moviesData : []))
      );
  }, []);
  //console.log(Object.values(movieList.moviesData?movieList.moviesData:[]));
  const handleView = (param,ind) => {
    setView(param)
    setIndexItem(ind<5?5:ind)
  }
  return (
    <div className='parentCard' data-testid='parent-card'>
      {movieList.map((item,index) => (
        <>
          {!!(Object.keys(view).length && (index===indexItem-5)) && <TrailerPlayer view={view} />}
          <Card item={item} handleView={handleView} ind={index}/>
        </>
      ))}
    </div>
  );
};

export default ParentCard;
