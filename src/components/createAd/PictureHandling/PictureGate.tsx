import  { useState } from 'react';

const maxImageCount = 20;
const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg', 'image/svg'];
const maxSize = 1048576; 
const imageArray: string[] = [];

function ReadFile() {
  const [imageSrc, setImageSrc] = useState(null);



  const handleFileChosen = (files: any) =>{
  };

  return (
    <div style={{ margin: 10 }}>
      <input type='file' onChange={(e) => handleFileChosen(e.target.files)} multiple />
      <div>
        {imageArray.map((image, index) => (
          <img key={index} src={image} alt={`Uploaded Image ${index+1}`} style={{ height: 60, marginTop: 10 }} />
        ))}
      </div>
    </div>
  );
}
export default ReadFile;




/*
Security Considerations for File Uploads in Web Applications:
1. **File Type Validation:**  validate the file type on the server-side. Ensure that uploaded files match expected types and reject any files that could potentially be harmful.
2. **File Size Limitations:** Set size limitations for uploaded files to prevent users from uploading excessively large files that could lead to denial-of-service attacks or consume excessive server resources.
3. **Filename Sanitization:** Perform thorough filename sanitization to avoid security risks related to filenames. Avoid using user-provided filenames directly on the server. Instead, generate unique filenames or sanitize and validate user-provided filenames.
4. **Storage Security:** Store uploaded files in a secure location with appropriate access controls. Avoid storing uploaded files in directories that are accessible via the web server unless necessary. Consider storing files outside the web root to prevent direct access.
5. **Anti-virus Scanning:** Implement anti-virus scanning for uploaded files to detect and block malicious content.
6. **Secure File Processing:** If your application processes uploaded files, ensure that the processing is secure and does not expose vulnerabilities like directory traversal or code execution.
7. **HTTPS:** Use HTTPS to encrypt data in transit, especially when users are uploading files.
8. **Content-Disposition Header:** Set the `Content-Disposition` header properly to control how browsers handle the file, preventing potential security issues like content sniffing.
9. **Regular Security Audits:** Regularly audit and monitor your file upload functionality for security vulnerabilities. Stay informed about security updates and apply patches promptly.
10. **User Authentication and Authorization:** Ensure that only authenticated and authorized users can upload files. Implement proper user authentication and authorization mechanisms.
11. **Cross-Site Request Forgery (CSRF) Protection:** Protect against CSRF attacks by implementing anti-CSRF tokens in your forms.
12. **Rate Limiting:** Implement rate limiting to prevent abuse and limit the number of file uploads from a single user within a specified timeframe.
Security is an ongoing process, and it's crucial to stay informed about the latest security best practices and vulnerabilities in the context of file uploads. Regularly update your dependencies and libraries to patch any known security issues.
*/