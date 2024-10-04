import axios from "axios";
import { useCallback, useEffect, useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import NegaraView from "./NegaraView";
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
const Negara = () => {
  const [state, dispatch] = useReducer(reducer, nilaiDefault);

  // const [resto, setResto] = useState();
  // const [hasilCari, sethasilCari] = useState();
  const [cari, setCari] = useSearchParams();
  const cariNegara = cari.get("carinegara");

  const ambilNegara = async () => {
    const response = await axios.get(
      "https://freetestapi.com/api/v1/countries"
    );
    const data = await response.data;
    // setResto(data);
    dispatch({ type: "FETCH_BERHASIL", payload: data });
  };

  const search = (input) => {
    setCari({ carinegara: input });
  };

  const ubahCari = useCallback(async () => {
    const response = await axios.get(
      "https://freetestapi.com/api/v1/countries?search=" + cariNegara
    );
    const data = await response.data;
    // sethasilCari(data);

    dispatch({ type: "SET_FILTER", payload: data });
  },
    [cariNegara]);

  useEffect(() => {
    ambilNegara();
    ubahCari(cariNegara);
  }, [cariNegara]);

  const hasilFilter = cariNegara ? state.filterData : state.data;

  useEffect(() => {
    console.log(state);
  }, [state]);

  console.log(state)


  return (
    <NegaraView
      search={search}
      cariNegara={cariNegara}
      hasilCari={state.filterData}
      hasilFilter={hasilFilter}
    />
  );

};

export default Negara;
