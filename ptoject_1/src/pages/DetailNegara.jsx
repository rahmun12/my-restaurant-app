import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [negara, setNegara] = useState();
  const ambilNegara = async () => {
    const response = await axios.get(
      "https://freetestapi.com/api/v1/countries/" + id
    );
    const data = await response.data;
    setNegara(data);
  };

  useEffect(() => {
    // ambilData()
    ambilNegara();
  }, []);

  return (
    // <div>
    //   <img src={resto?.thumbnail} alt="" />
    //   <h1>{resto?.restaurant.name }</h1>
    // </div>
    <div className="hero bg-base-200 min-h-screen  bg-red-50">
      <div className="hero-content text-center space-y-8 flex-col">
        <img
          src={negara?.flag}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{negara?.name}</h1>
          <p className="py-6 max-w-[50rem] text-center">
            {negara?.currency}
          </p>
          <button className="btn btn-outline btn-secondary">Visit</button>
          </div>
      </div>
    </div>
  );
}