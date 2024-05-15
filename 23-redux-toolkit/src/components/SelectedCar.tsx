import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { clear } from "../redux/slices/selectedCarSlice";

const SelectedCar = () => {
  const selectedCar = useSelector(
    (state: RootState) => state.selectedCar.value,
  );
  const dispatch = useDispatch();

  if (!selectedCar) return null;

  return (
    <div className="mb-3 flex items-center justify-center space-x-4">
      <h2 className="text-xl">{`Your selection is a ${selectedCar.brand.name} - ${selectedCar.model.name} - ${selectedCar.year}`}</h2>
      <button
        className="btn"
        onClick={() => {
          dispatch(clear());
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default SelectedCar;
