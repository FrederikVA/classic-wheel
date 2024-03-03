import RightSideBox from './CreateTextFields/RCreateTextField';
import IntegerInputBox from './CreateTextFields/RCreateIntField';
import LargeTextInputBox from './CreateTextFields/RCreateBigTextField';
import AcceptTerms from './CreateTextFields/AcceptTerms';
import ReadFile from './PictureHandling/PictureGate';


const RightView = ({ textValues, onTextChange }: { textValues: any, onTextChange: any }) => {
  function handleIconClick(arg0: string): void {
    throw new Error('Function not implemented.');
  }



  return (
    <div style={{  width: '40%',  }}>
      <div style={{margin: 10, width:'90%', height: 600, overflow: 'auto', boxShadow: '0 0 1px rgba(0, 0, 0, 0.5)', right:0 }}>
        <div style={{ margin: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', borderRadius: '5px' }}>
          <div style={{display: "flex", paddingLeft: 15, paddingTop: 5, justifyContent:'space-between'}}>
            <h3 style={{margin: 0}}>Title</h3> 
            <span
            title="Write the name of your ad here"
            onClick={() => handleIconClick('title')}
            style={{ cursor: 'pointer', paddingRight: 10 }}
            >
            (i)
            </span>
          </div>
          <div style={{paddingLeft: 15, paddingBottom: 10}}>
            <RightSideBox boxName="title" value={textValues.title} onTextChange={onTextChange} />
          </div>
        </div>

        <div style={{ margin: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', borderRadius: '5px' }}>
          <div style={{display: "flex", paddingLeft: 15, paddingTop: 5, justifyContent:'space-between'}}>
            <h3 style={{margin: 0}}>Category</h3> 
            <span
              title="In which categories does your ad belong? (Choose more than one)"
              onClick={() => handleIconClick('title')}
              style={{ cursor: 'pointer', paddingRight: 10}}
              >
              (i)
            </span>
          </div> 
          <div> 
            <div style={{display: 'flex', justifyContent: 'space-between', marginLeft:15, marginRight:15, borderBottom: '1px solid black' }}>
              <div>
                <input type="radio" id="#" name="vehicleType" value="Category 1" defaultChecked />
                <label htmlFor="#">Car</label>
              </div>
              <div>
                <input type="radio" id="#" name="vehicleType" value="Category 2" />
                <label htmlFor="#">Bike</label>
              </div>
              <div>
                <input type="radio" id="#" name="vehicleType" value="Category 3" />
                <label htmlFor="#">Other</label>
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginLeft:15, marginRight:15}}>
              <div>
                <input type="radio" id="#" name="vehicleCategory" value="Category 1" defaultChecked/>
                <label htmlFor="#">Vehicle</label>
              </div>
              <div>
                <input type="radio" id="#" name="vehicleCategory" value="Category 2" />
                <label htmlFor="#">Part(s)</label>
              </div>
              <div>
                <input type="radio" id="#" name="vehicleCategory" value="Category 3" />
                <label htmlFor="#">Other</label>
              </div>
            </div>
          </div>
        </div>
        <div style={{ margin: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', borderRadius: '5px' }}>
          <div style={{display: "flex", paddingLeft: 15, paddingTop: 5, justifyContent:'space-between'}}>
            <h3 style={{margin: 0}}>Information</h3> 
            <span
              title="What are the most important facts about your vehicle?"
              onClick={() => handleIconClick('title')}
              style={{ cursor: 'pointer', paddingRight: 10}}
              >
              (i)
            </span>
          </div> 
          <div style={{paddingLeft: 15, paddingBottom: 10}}>
            <RightSideBox boxName="brand" value={textValues.brand} onTextChange={onTextChange} />
            <RightSideBox boxName="model" value={textValues.model} onTextChange={onTextChange} />
            <RightSideBox boxName="year" value={textValues.year} onTextChange={onTextChange} />
          </div>
         
        </div>
        <div style={{ margin: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', borderRadius: '5px' }}>
          <div style={{display: "flex", paddingLeft: 15, paddingTop: 5, justifyContent:'space-between'}}>
            <h3 style={{margin: 0}}>Description</h3> 
            <span
            title="Whats the history? What are the special features (good and bad)?"
            onClick={() => handleIconClick('title')}
            style={{ cursor: 'pointer', paddingRight: 10}}
            >
            (i)
            </span>
          </div>
          <div style={{paddingLeft: 15, paddingBottom: 10}}>
            <LargeTextInputBox boxName="description" value={textValues.description} onTextChange={onTextChange} />
          </div>
          
        </div>
        <div style={{ margin: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', borderRadius: '5px' }}>
          <div style={{display: "flex", paddingLeft: 15, paddingTop: 5, justifyContent:'space-between'}}>
            <h3 style={{margin: 0}}>Add images</h3> 
            <span
            title="Add images to showcase your ad. Choose 'showcase image' after"
            onClick={() => handleIconClick('title')}
            style={{ cursor: 'pointer', paddingRight: 10}}
            >
            (i)
            </span>
          </div>

            <div>
              <ReadFile  />
            </div>

        </div>



        <div style={{ margin: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', borderRadius: '5px' }}>
          <div style={{display: "flex", paddingLeft: 15, paddingTop: 5, justifyContent:'space-between'}}>
            <h3 style={{margin: 0}}>Price</h3> 
            <span
            title="Total price of the vehicle or part(s) in the ad."
            onClick={() => handleIconClick('title')}
            style={{ cursor: 'pointer', paddingRight: 10}}
            >
            (i)
            </span>
          </div>
          <div style={{display: 'flex'}}>
            <div style={{paddingLeft: 15, paddingBottom: 10}}>
              <IntegerInputBox boxName="price" value={textValues.value} onTextChange={onTextChange} />
            </div>
            <p style={{margin:0, paddingLeft:5,paddingRight:5}}>currency</p>
            <select style={{ width: '20%', height: '25px' }} value={textValues.currency} onChange={(e) => onTextChange('currency', e.target.value)}>
              <option value="EURO">EURO</option>
              <option value="Danske kroner">DKK</option>
              <option value="Svenske kroner">SEK</option>
              <option value="Norske kroner">NO</option>
              <option value="Pound">GBP</option>
            </select>
          </div>
        </div>

        <div style={{ margin: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', borderRadius: '5px' }}>
          <div style={{display: "flex", paddingLeft: 15, paddingTop: 5, justifyContent:'space-between'}}>
            <h3 style={{margin: 0}}>Preferences</h3> 
            <span
              title="Chose what contact-information visitors can see."
              onClick={() => handleIconClick('title')}
              style={{ cursor: 'pointer', paddingRight: 10}}
              >
              (i)
            </span>
          </div> 
          <div>
            <p style={{margin:0, paddingLeft:15}}>How to get contacted:</p>
            <div style={{display: 'flex', justifyContent: 'space-between', marginLeft:15, marginRight:15, borderBottom: '1px solid black' }}>
              <div>
                <input type="checkbox" id="#" name="vehicleType" value="Category 1" defaultChecked readOnly />
                <label htmlFor="#">Here</label>
              </div>
              <div>
                <input type="checkbox" id="#" name="vehicleType" value="Category 2" />
                <label htmlFor="#">Mail</label>
              </div>
              <div>
                <input type="checkbox" id="#" name="vehicleType" value="Category 3" />
                <label htmlFor="#">Phone</label>
              </div>
            </div>
            <p style={{margin:0, paddingLeft:15}}>Other:</p>
            <div style={{display: 'flex', justifyContent: 'space-between', marginLeft:15, marginRight:15}}>
              <div>
                <input type="checkbox" id="#" name="vehicleCategory" value="Category 1" />
                <label htmlFor="#">Interrested in trading</label>
              </div>
              <div>
                <input type="checkbox" id="#" name="vehicleCategory" value="Category 2" />
                <label htmlFor="#">blavla(s)</label>
              </div>
              <div>
                <input type="checkbox" id="#" name="vehicleCategory" value="Category 3" />
                <label htmlFor="#">Other</label>
              </div>
            </div>
          </div>
      </div>
      <div style={{ margin: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', borderRadius: '5px',  }}>
        <div style={{display: "flex", paddingLeft: 15, paddingTop: 5, justifyContent:'space-between'}}>
          <h3 style={{margin: 0}}>Finish</h3> 
          <span
            title="Accept the terms and conditions and publish your ad or save it as a draft."
            onClick={() => handleIconClick('title')}
            style={{ cursor: 'pointer', paddingRight: 10}}
            >
            (i)
          </span>
        </div> 
        <div>
          <AcceptTerms />
        </div>
      </div>
    </div>
  </div>
  );
};

export default RightView;
