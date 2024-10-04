import { useEffect } from "react";
import { Link } from "react-router-dom";

const BerandaView = ({ search, cariProduct, hasilCari, hasilFilter }) => {
  useEffect(() => {
    console.log(hasilFilter);
  }, [hasilFilter]);
  return (
    <>
      <div className="beranda dark:bg-black">
        <div className="flex justify-center">
          <label className="input input-bordered flex items-center gap-2 my-4 w-[500px] ">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              onChange={(input) => {
                search(input.target.value);
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <p>
          Hasil Dari :{hasilCari?.restaurants?.length}, ditemukan :
          {hasilCari?.founded}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {hasilFilter?.restaurants?.map((data) => (
            <div className="card bg-purple-100 dark:bg-slate-400 dark:text-white w-96" key={data?.name}>
              <figure>
                <img
                  src={`https://restaurant-api.dicoding.dev/images/medium/${data.pictureId}`}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.name}</h2>
                <p className="line-clamp-2">{data.description}</p>
                <div className="card-actions justify-end">
                  <Link to={"/detail/" + data.id} className="btn btn-primary">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BerandaView;
