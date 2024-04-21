import { useEffect, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Axiospublic from "../../../../Apis/Axiospublic";
import { Helmet } from "react-helmet";
import Groupheader from "../../Shared/Groupheader";

const Groupdetails = () => {
  const [data, setData] = useState({});
  const id = useLoaderData();
  console.log(id);
  console.log(data);
  useEffect(() => {
    Axiospublic.get(`/group/${id}`).then((res) => setData(res.data));
  }, [id, setData]);
  return (
    <div className="max-w-screen-lg mx-auto">
      <Helmet title={`BondBox | Group | ${data?.groupName}`}></Helmet>
      <Groupheader data={data}></Groupheader>
      <Outlet></Outlet>
    </div>
  );
};

export default Groupdetails;
