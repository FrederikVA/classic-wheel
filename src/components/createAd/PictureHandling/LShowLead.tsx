
const LShowLead = ({ picture1, picture2 }: { picture1: string, picture2: string }) => {
  const defaultIconSrc = 'src/assets/icons/camera-solid.svg';
  const imageSize = { width: '100%', height: 'auto' };
  const placeholderStyle = {  width: '30%', height: 'auto'};
  
  return (
    <div>
      {picture1 && picture2 ? (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <img src={picture1} alt="Picture 1" style={imageSize} />
          <img src={picture2} alt="Picture 2" style={imageSize} />
        </div>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem'}}>
          <div style={{ width:'50%', height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '0.3px solid black'}}>
            <img src={defaultIconSrc} alt="Image Placeholder" style={placeholderStyle} />
          </div>
          <div style={{ width:'50%', height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '0.3px solid black' }}>
            <img src={defaultIconSrc} alt="Image Placeholder" style={placeholderStyle} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LShowLead;
