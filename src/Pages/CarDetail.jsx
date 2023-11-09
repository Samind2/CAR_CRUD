import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const CarDetail = () => {
  const { id } = useParams();
  const[carData, setCarData] = useState({});
  useEffect(()=>{
    fetch("http://localhost:3000/car/" + id)
    .then((res)=>res.json())
    .then((data)=>{
      setCarData(data)
    }) 
    .catch((err)=>{
      console.log(err);
    });
  }, [id]);
  return (
    <div className="offset-lg-3 col-lg-6">
      <div className="container">
        <div className="card-row">
          <div className="card-title">
            <h2>Car Detail</h2>
          </div>
          {carData && (
            <div className="card-body">
              <img src={carData.image + "&" + carData.id} alt="car" />
              <div className="card-text">
                <h3>{carData.brand} - ({carData.id})</h3>
                <h4>Contact Detail:</h4>
                <h5>Model: {carData.model}</h5>
                <h5>Year: {carData.year}</h5>
                <h5>Color: {carData.color}</h5>
              </div>
              <Link to="/" className="btn btn-danger">
                Back to Listing
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarDetail;