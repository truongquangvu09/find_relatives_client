import * as request from '../utils/request/request';

export const list = async () => {
  try {
    const res = await request.get('report/report-list');
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const create = async (report_name, email, password) => {
  try {
    const res = await request.post('report/createAccount', {
      report_name: report_name,
      email: email,
      password: password,
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const signIn = async (email, password) => {
  try {
    const res = await request.post('report/login', {
      email: email,
      password: password,
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleted = async (id) => {
  try {
    const res = await request.deleted(`report/report-delete/${id}`);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};
