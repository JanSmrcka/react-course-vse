import { classNames } from "../utils";
import Car from "./Car";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useGetCarListQuery } from "../redux/api/carApi";
import Loader from "./Loader";

const CarList: FC = () => {
  const searchParams = useSelector(
    (state: RootState) => state.searchParams.value,
  );
  const { data: cars, isFetching } = useGetCarListQuery(searchParams);

  if (!cars && isFetching) {
    return <Loader />;
  }

  return (
    <div
      className={classNames("mt-2 grid gap-2", isFetching ? "opacity-45" : "")}
    >
      {!cars?.length ? (
        <h2>No Results</h2>
      ) : (
        cars?.map((car) => <Car key={car.id} car={car} />)
      )}
    </div>
  );
};

export default CarList;
