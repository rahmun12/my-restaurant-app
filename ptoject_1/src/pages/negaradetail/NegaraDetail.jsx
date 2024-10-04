
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
const NegaraDetail = () => {
  const { id } = useParams()
  const [negara, setNegara] = useState();
  const ambilNegara = async () => {
    const response = await axios.get("https://restaurant-api.dicoding.dev/detail/" + id);
    const data = await response.data;
    setNegara(data);
  };

  useEffect(() => {
    ambilNegara();
  }, []);

  return (
    <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center space-y-8 flex-col">
          <img
            src={`https://restaurant-api.dicoding.dev/images/large/${negara?.countries.pictureId}`}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{negara?.countries?.name}</h1>
            <p className="py-6 max-w-[50rem] text-justify">
              {negara?.countries?.description}
            </p>
            <button className="btn btn-primary">Jelajahi</button>
          </div>
        </div>
      </div>
  );
};

export default NegaraDetail