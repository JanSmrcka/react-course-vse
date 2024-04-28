import { useQuery } from "@tanstack/react-query";
import requestModelList from "../apis/requestModelList";

const useModelList = (brand) => {
  console.log(brand === "", brand);
  const { data, isLoading } = useQuery({
    queryKey: ["models", brand],
    queryFn: requestModelList,
    initialData: [],
    enabled: !!brand,
  });
  return [data, isLoading];
};

export default useModelList;
