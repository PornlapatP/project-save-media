import axios from 'axios';

const API_URL = 'http://localhost:3000'; // เปลี่ยนเป็น URL ของ backend ของคุณ

export const register = async (username: string, password: string) => {
  return axios.post(`${API_URL}/register`, { username, password });
};

export const login = async (username: string, password: string) => {
  return axios.post(`${API_URL}/login`, { username, password });
};

export const uploadFile = async (file: FormData) => {
  return axios.post(`${API_URL}/upload`, file, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getFiles = async () => {
  return axios.get(`${API_URL}/files`);
};

export const getScheduledFiles = async () => {
  return axios.get(`${API_URL}/scheduled-files`);
};

export const scheduleFile = async (fileId: number, displayTime: Date) => {
  return axios.post(`${API_URL}/schedule`, { fileId, displayTime });
};
