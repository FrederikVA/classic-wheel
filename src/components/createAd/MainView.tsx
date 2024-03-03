import { useState } from 'react';
import LeftView from './LeftView';
import RightView from './RightView';
import UnderNav from './SecondNav';

const MainView = () => {
  const [textValues, setTextValues] = useState({
    title: '',
    brand: '',
    model: '',
    year: '',
    description: '',
    price: '',
  });

  const handleTextChange = (boxName: string, value: string) => {
    setTextValues((prevValues) => ({ ...prevValues, [boxName]: value }));
  };

  return (
    
    <div >
      <div style={{}}>
        <UnderNav/>
      </div>
      <div style={{ display: "flex", }}>
        <LeftView textValues={textValues} />
        <RightView textValues={textValues} onTextChange={handleTextChange}  />
      </div>
    </div>
  );
};

export default MainView;
