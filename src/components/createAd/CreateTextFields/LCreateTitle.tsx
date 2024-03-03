
const LeftSideTitle = ({ boxName, content }: { boxName: string, content: string }) => {
  return (
    <div>
      <h3>{`${boxName}: ${content}`}</h3>
    </div>
  );
};

export default LeftSideTitle;
