import { useEffect, useRef, useState } from 'react';

const LargeTextInputBox = ({ boxName, value, onTextChange }: { boxName: string, value: string, onTextChange: (boxName: string, newValue: string) => void }) => {
  const [collapsed, setCollapsed] = useState(true);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const handleDocumentClick = (event: { target: any; }) => {
      // Check if the click occurred outside the textarea
      if (textareaRef.current && !textareaRef.current.contains(event.target as Node)) {
        setCollapsed(true);
      }
    };

    document.addEventListener('mousedown', handleDocumentClick);

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

  const handleChange = (e: { target: { value: any; }; }) => {
    const newValue = e.target.value;
    onTextChange(boxName, newValue);
  };

  const handleToggleExpand = () => {
    if (collapsed) {
      setCollapsed(false);
    }
  };

  return (
    <div>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        placeholder={collapsed ? '..' : 'description'}
        style={{
          borderRadius: '8px',
          border: '0.5px solid #ccc',
          padding: '8px',
          height: collapsed ? '1.5em' : '200px', // Adjusted height based on collapsed state
          resize: 'none',
          width: '90%',
        }}
        onClick={handleToggleExpand} // Toggle height when clicked
      />
    </div>
  );
};

export default LargeTextInputBox;
