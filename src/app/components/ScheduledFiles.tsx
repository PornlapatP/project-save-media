"use client"
import { useState, useEffect } from 'react';
import { getScheduledFiles } from '../services/api';
import { File } from '../types';
import styles from '../styles/ScheduledFiles.module.css';

const ScheduledFiles = () => {
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    const fetchScheduledFiles = async () => {
      const response = await getScheduledFiles();
      setFiles(response.data);
    };
    fetchScheduledFiles();
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

export default ScheduledFiles;
