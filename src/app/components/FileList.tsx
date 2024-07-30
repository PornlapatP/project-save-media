import { useState, useEffect } from 'react';
import { getFiles } from '../services/api';
import { File } from '../types';
import styles from '../styles/FileList.module.css';

const FileList = () => {
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const response = await getFiles();
      setFiles(response.data);
    };
    fetchFiles();
  }, []);

  return (
    <div className={styles.container}>
      {files.map((file) => (
        <div key={file.id} className={styles.file}>
          {file.type.startsWith('image') ? (
            <img src={file.path} alt={file.filename} />
          ) : (
            <video src={file.path} controls />
          )}
        </div>
      ))}
    </div>
  );
};

export default FileList;
