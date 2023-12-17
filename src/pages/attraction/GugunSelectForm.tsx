import {FormControl, NativeSelect} from "@mui/material";
import React, {useEffect, useState} from "react";
import {IGugun} from "../../types/attraction";
import {searchGuguns} from "../../utils/apis/attraction";

interface GugunSelectFormProps {
  selectedSidoId: number;
}

const GugunSelectForm = ({selectedSidoId}: GugunSelectFormProps) => {
  const [gugunList, setGugunList] = useState<IGugun[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchGugunData = async () => {
    try {
      const response = await searchGuguns(selectedSidoId);

      if (response.status === 200) {
        setGugunList(response.data.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGugunData();
  }, [selectedSidoId]);

  return (
    <div className={'w-64 ms-10'}>
      <FormControl fullWidth>
        <NativeSelect
          // defaultValue={2}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          {isLoading ? null : gugunList.map(gugun => (
            <option key={gugun.gugunId} value={gugun.gugunId}>{gugun.name}</option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default GugunSelectForm;