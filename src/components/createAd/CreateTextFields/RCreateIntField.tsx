

const IntegerInputBox = ({ boxName, value, onTextChange }: { boxName: string, value: number, onTextChange: (boxName: string, newValue: number) => void }) => {
const handleChange = (e: { target: { value: string; }; }) => {
    const newValue = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    onTextChange(boxName, value);
};

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={`.. ${boxName}`}
        style={{ borderRadius: '8px', border: '0.5px solid #ccc', padding: '4px' }}
      />
    </div>
  );
};

export default IntegerInputBox;
