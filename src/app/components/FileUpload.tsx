import { useState, useContext } from 'react';
import { uploadFile } from '../services/api';
import styles from '../styles/FileUpload.module.css';

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      try {
        await uploadFile(formData);
        alert('File uploaded successfully');
      } catch (error) {
        alert('File upload failed');
      }
    }
  };

  return (
    <div className={styles.container}>
      <input type="file" placeholder='File' onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
