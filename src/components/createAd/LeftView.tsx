import LeftSideTitle from './CreateTextFields/LCreateTitle';
import IntegerInputBox from './CreateTextFields/RCreateIntField';
import LargeTextInputBox from './CreateTextFields/RCreateBigTextField';
import LeftNormalTextBox from './CreateTextFields/LNormalText';
import LShowLead from './PictureHandling/LShowLead';

interface TextValues {
    title: string;
    brand: string;
    model: string;
    year: string;
    description: string;
    price: string;
}

const LeftView = ({ textValues }: { textValues: TextValues }) => {
    return (
        <div style={{ backgroundColor: "lightblue", width: '60%' }}>
            <div style={{margin:15, backgroundColor:'white', height: 600, overflow: 'auto'}}>
                <div>
                    <LargeTextInputBox
                        boxName="Description"
                        value={textValues.description} onTextChange={function (boxName: string, newValue: string): void {
                            throw new Error('Function not implemented.');
                        } }
                    />
                    <div style={{border: '0.3px solid gray', width: '30%', }}>
                        <LeftSideTitle boxName="Title" content={textValues.title} />
                        <LeftNormalTextBox boxName="Brand" content={textValues.brand} />
                        <LeftNormalTextBox boxName="Model" content={textValues.model} />
                        <LeftNormalTextBox boxName="Year" content={textValues.year} />
                        <IntegerInputBox boxName="Price" value={parseInt(textValues.price)} onTextChange={function (boxName: string, newValue: number): void {
                            throw new Error('Function not implemented.');
                        } } />
                    </div>

                </div>
                <div>
                    <LShowLead picture1="" picture2=""/>
                </div>
            </div>
        </div>
    );
};

export default LeftView;
