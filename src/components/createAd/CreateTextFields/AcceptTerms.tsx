import { useState } from 'react';

const AcceptTerms = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleCheckboxChange = () => {
    setAcceptTerms(!acceptTerms);
  };

  return (
    <div style={{ paddingLeft: 15, paddingBottom: 10 }}>
      <div style={{ display: 'flex' }}>
        <p style={{ margin: 5 }}>
          Accept our <a href="#" target="_blank">terms of use</a>
        </p>
        <input
          type="checkbox"
          id="termsOfUse"
          name="termsOfUse"
          onChange={handleCheckboxChange}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <button
          style={{
            margin: 10,
            borderRadius: '8px',
            paddingLeft: '10px',
            paddingRight: '10px',
            backgroundColor: acceptTerms ? 'green' : 'gray',
            color: 'white',
            cursor: acceptTerms ? 'pointer' : 'not-allowed',
          }}
          disabled={!acceptTerms}
        >
          Publish
        </button>
        <p style={{ margin: 5 }}>or</p>
        <button
          style={{
            margin: 10,
            borderRadius: '8px',
            paddingLeft: '10px',
            paddingRight: '10px',
            backgroundColor: 'lightblue',
            color: 'black',
          }}
        >
          Save as draft
        </button>
      </div>
    </div>
  );
};

export default AcceptTerms;
