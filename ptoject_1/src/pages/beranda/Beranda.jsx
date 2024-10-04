import axios from "axios";
import { useCallback, useEffect, useReducer } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import BerandaView from "./BerandaView";
import { data } from "autoprefixer";
const nilaiDefault = {
  data: [],
  filterData: [],
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_BERHASIL":
      return {
        ...state,
        data: action.payload,
        // filterData: action.payload,
        loading: false,
      };
    case "SET_FILTER":
      return {
        ...state,
        filterData: action.payload,
      };
    default:
      throw new Error("error");
  }
};
const Beranda = () => {
  const [state, dispatch] = useReducer(reducer, nilaiDefault);

  // const [resto, setResto] = useState();
  // const [hasilCari, sethasilCari] = useState();
  const [cari, setCari] = useSearchParams();
  const cariProduct = cari.get("cariproduct");

  const ambilResto = async () => {
    const response = await axios.get(
      "https://restaurant-api.dicoding.dev/list"
    );
    const data = await response.data;
    // setResto(data);
    dispatch({ type: "FETCH_BERHASIL", payload: data });
  };

  const search = (input) => {
    setCari({ cariproduct: input });
  };

  const ubahCari = useCallback(async () => {
    const response = await axios.get(
      "https://restaurant-api.dicoding.dev/search?q=" + cariProduct
    );
    const data = await response.data;
    // sethasilCari(data);

    dispatch({ type: "SET_FILTER", payload: data });
  },
    [cariProduct]);

  useEffect(() => {
    ambilResto();
    ubahCari(cariProduct);
  }, [cariProduct]);

  const hasilFilter = cariProduct ? state.filterData : state.data;

  useEffect(() => {
    console.log(state);
  }, [state]);

  console.log(state)


  return (
    <BerandaView
      search={search}
      cariProduct={cariProduct}
      hasilCari={state.filterData}
      hasilFilter={hasilFilter}
    />
  );

};

export default Beranda;
