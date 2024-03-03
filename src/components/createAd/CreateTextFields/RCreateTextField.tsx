
const RightSideBox = ({ boxName, value, onTextChange }: { boxName: string, value: string, onTextChange: (boxName: string, newValue: string) => void }) => {
  const handleChange = (e: { target: { value: string; }; }) => {
    const newValue = e.target.value;
    onTextChange(boxName, newValue);
  };

  return (
    <div>
      <input type="text" value={value} 
        onChange={handleChange} 
        placeholder={`.. ${boxName}`} 
        style={{ borderRadius: '8px', border: '0.5px solid #ccc', padding: 4, margin: 1 }}/>
    </div>
  );
};

export default RightSideBox;
