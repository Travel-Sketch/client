import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {FormControl, NativeSelect} from "@mui/material";
import {searchSidos} from "../../utils/apis/attraction";
import {ISido} from "../../types/attraction";

interface SidoSelectFromProps {
  selectedSidoId: number;
  setSelectedSidoId: Dispatch<SetStateAction<number>>;
}

const SidoSelectForm = ({selectedSidoId, setSelectedSidoId}: SidoSelectFromProps) => {
  const [sidoList, setSidoList] = useState<ISido[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchSidoData = async () => {
    try {
      const response = await searchSidos();

      if (response.status === 200) {
        setSidoList(response.data.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSidoData();
  }, []);

  const handleSidoSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedSidoId(Number(selectedValue));
  }

  return (
    <div className={'w-64 ms-10'}>
      <FormControl fullWidth>
        <NativeSelect
          // defaultValue={2}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
          onChange={handleSidoSelectChange}
        >
          {isLoading ? null : sidoList.map(sido => (
            <option key={sido.sidoId} value={sido.sidoId}>{sido.name}</option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}

export default SidoSelectForm;