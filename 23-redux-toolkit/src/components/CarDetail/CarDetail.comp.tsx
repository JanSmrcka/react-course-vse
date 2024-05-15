import { FC, lazy, useState } from "react";
import Carousel from "../Carousel";

import { useNavigate } from "react-router-dom";
import { CarDetailResponse } from "../../types/APIResponseTypes";
import { useDispatch } from "react-redux";
import { select } from "../../redux/slices/selectedCarSlice";
const SubmitCarModal = lazy(() => import("../SubmitCarModal"));

interface DetailParamProps {
  label: string;
  value?: string;
}

const DetailParam: FC<DetailParamProps> = ({ label, value }) => {
  if (!value) return null;
  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm font-medium leading-6 text-gray-900">{label}</dt>
      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        {value}
      </dd>
    </div>
  );
};

interface Props {
  car: CarDetailResponse;
}

const CarDetailComponent: FC<Props> = (props) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  if (!props.car) return null;

  return (
    <div>
      <div className="px-4 sm:px-0">
        <div className="flex text-base font-semibold leading-7 text-gray-900">
          {props.car.brand.name}
          {" - "}
          {props.car.model.name}
        </div>
        <button className="btn mb-2" onClick={() => setShowModal(true)}>
          I want that car !
        </button>
        <Carousel images={props.car.images} />
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <DetailParam label="Year" value={props.car.year} />
          <DetailParam label="Price" value={`${props.car.price} CZK`} />
          <DetailParam label="Color" value={props.car.color} />
          <DetailParam label="Location" value={props.car.location} />
          <DetailParam label="Description" value={props.car.description} />
        </dl>
      </div>
      <SubmitCarModal
        text={`Are you interested about ${props.car.brand.name} ${props.car.model.name}`}
        open={showModal}
        goNext={() => {
          dispatch(select(props.car));
          navigate("/");
        }}
        goBack={() => setShowModal(false)}
      />
    </div>
  );
};
export default CarDetailComponent;
