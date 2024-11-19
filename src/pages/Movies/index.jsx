import { useParams } from "react-router-dom";

const Movies = () => {
  const { id } = useParams();
  
  return (
    <div>
      <h2>Movies {id}</h2>
    </div>
  );
};

export default Movies;
