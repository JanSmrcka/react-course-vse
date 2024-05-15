import { useState } from "react";
import CarList from "./CarList";
import SelectedCar from "./SelectedCar";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/searchParamsSlice";
import { useGetModelListQuery } from "../redux/api/carApi";

const brands = ["Skoda", "Opel", "Volkswagen", "Toyota", "Fiat"];

const SearchParams = () => {
  const [brand, setBrand] = useState("");

  const dispatch = useDispatch();

  const { data: models } = useGetModelListQuery({ brand }, { skip: !brand });

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const obj = {
      location: formData.get("location")?.toString() ?? "",
      brand: formData.get("brand")?.toString() ?? "",
      model: formData.get("model")?.toString() ?? "",
    };
    dispatch(setSearch(obj));
  }

  return (
    <div>
      <SelectedCar />
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col rounded-md bg-lime-300 px-10 py-5 shadow-sm shadow-gray-400"
      >
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          className="form-field"
        />
        <label htmlFor="brand">Brand</label>
        <select
          className="form-field"
          name="brand"
          id="brand"
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
          }}
        >
          <option value={""} />
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <label htmlFor="model">Model</label>
        <select
          className="form-field"
          name="model"
          id="model"
          disabled={!models?.length}
        >
          <option value={""} />
          {models?.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
        <button className="btn mt-4">Search</button>
      </form>
      <CarList />
    </div>
  );
};

export default SearchParams;
