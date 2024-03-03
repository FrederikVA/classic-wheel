
const LeftDesciption = ({ boxName, content }: { boxName: string, content: string }) => {
    return (
      <div>
        <p>{`Left Side Box ${boxName} Content: ${content}`}</p>
      </div>
    );
  };
  
  export default LeftDesciption;
  