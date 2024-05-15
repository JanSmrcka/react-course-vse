import { useParams } from "react-router-dom";
import CarDetailComponent from "./CarDetail.comp";
import ErrorBoundary from "../ErrorBoundary";
import ErrorComponent from "../ErrorComponent";
import { useGetCarQuery } from "../../redux/api/carApi";
import Loader from "../Loader";

const CarDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetCarQuery(id as string);

  if (isError) {
    throw new Error("Error fetching car details");
  }

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  return <CarDetailComponent car={data} />;
};

function CarDetailsErrorBoundary() {
  return (
    <ErrorBoundary fallback={<ErrorComponent />}>
      <CarDetails />
    </ErrorBoundary>
  );
}

export default CarDetailsErrorBoundary;
