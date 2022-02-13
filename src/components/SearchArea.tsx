import axios from "axios";
import { useState } from "react";
import { DataTable } from "./DataTable";
import { Loading } from "./Loading";
import { LoadingButton } from "@mui/lab";

import MessageForUser from "./MessageForUser";

export const SearchArea = () => {
  const [registarationNum, setRegistarationNum] = useState("");
  const [carGovData, setCarGovData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setRegistarationNum(value);
  };

  const handleClick = async () => {
    const registarationNumAPI = `https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=1&sort=mispar_rechev&q=${registarationNum}`;
    setCarGovData({});
    setIsLoading(true);
    setMessage("");

    axios
      .get(registarationNumAPI)
      .then(function (res) {
        const { result } = res.data;
        const [record] = result.records;
        return record;
      })
      .then(function (record) {
        if (record?._id) {
          setCarGovData(record);
        } else {
          setMessage("No Results Found.");
        }
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex items-center p-3">
        <input
          className="border-2 rounded m-1 p-1"
          value={registarationNum}
          onChange={handleChange}
        />
        <LoadingButton
          onClick={handleClick}
          loading={isLoading}
          variant="outlined"
        >
          SEARCH
        </LoadingButton>
      </div>
      <DataTable data={carGovData} />
      {message && <MessageForUser message={message} />}
    </div>
  );
};
