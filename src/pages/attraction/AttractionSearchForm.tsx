import React, {useState} from 'react';
import SidoSelectForm from "./SidoSelectForm";
import GugunSelectForm from "./GugunSelectForm";
import TypeSelectForm from "./TypeSelectForm";
import SearchForm from "./SearchForm";

const AttractionSearchForm = ({}) => {
  const [selectedSidoId, setSelectedSidoId] = useState(1);

  return (
    <div className={'container flex flex-row justify-center m-6'}>
      <SidoSelectForm selectedSidoId={selectedSidoId} setSelectedSidoId={setSelectedSidoId}/>
      <GugunSelectForm selectedSidoId={selectedSidoId}/>
      <TypeSelectForm/>
      <SearchForm/>
    </div>
  );
};

export default AttractionSearchForm;