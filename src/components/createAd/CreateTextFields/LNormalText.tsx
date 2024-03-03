
const LeftNormalTextBox = ({ boxName, content }: { boxName: string, content: string }) => {
    return (
      <div>
        <p>{`${boxName}: ${content}`}</p>
      </div>
    );
  };
  
  export default LeftNormalTextBox;
  