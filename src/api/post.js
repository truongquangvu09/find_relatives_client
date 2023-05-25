import * as request from '../utils/request/request';

export const listPost = async () => {
  try {
    const res = await request.get('/post/post-list');
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const detailPost = async (id) => {
  try {
    const res = await request.getDetail(`post/post-detail/${id}`);
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deletedPost = async (id) => {
  try {
    const res = await request.deleted(`post/post-delete/${id}`);
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};
