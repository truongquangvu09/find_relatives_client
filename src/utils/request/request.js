import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:8080/api/v1/',
  timeout: 10000,
});

export const get = async (path) => {
  const response = await request.get(path);
  return response.data;
};

export const getDetail = async (path, id) => {
  const response = await request.get(path, id);
  return response.data;
};

export const post = async (path, object = {}, token) => {
  const response = await request.post(path, object, { headers: { token } });
  return response.data;
};

export const update = async (path, id, object = {}) => {
  const response = await request.put(path, id, (object = {}));
  return response.data;
};

export const deleted = async (path, id) => {
  await request.delete(path, id);
  return 'deleted';
};

export default request;
