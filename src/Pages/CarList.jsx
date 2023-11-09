import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Studentlist = () => {
  const [carData, setCarData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/car")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setCarData(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const loadEdit = (id) => {
    navigate("/car/edit/" + id);
  };
  const loadDetail = (id) => {
    navigate("/car/detail/" + id);
  };
  const removeCar = (id) => {
   if(window.confirm("Do You Want To Remove")){
    fetch("http://localhost:3000/car/" + id,{
      method:"DELETE"
    }).then((res)=>{
      alert("remove successfuly");
      window.location.reload()
    }).catch((err)=>{
      console.log(err)
    });
   }
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Car List</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/car/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <br />
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>Id</td>
                <td>Brand</td>
                <td>Modelr</td>
                <td>Year</td>
                <td>color</td>
              </tr>
            </thead>
            <tbody>
              {carData &&
                carData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.brand}</td>
                    <td>{item.model}</td>
                    <td>{item.year}</td>
                    <td>{item.color}</td>
                    <td>
                      <a
                        className="btn btn-success"
                        onClick={() => {
                          loadEdit(item.id);
                        }}
                      >
                        Edit
                      </a>  
                      <a
                        className="btn btn-danger"
                        onClick={() => {
                          removeCar(item.id);
                        }}
                      >
                        Delete
                      </a>  
                      <a
                        className="btn btn-primary"
                        onClick={() => {
                          loadDetail(item.id);
                        }}
                      >
                        Detail
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Studentlist;