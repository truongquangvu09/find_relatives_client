import * as requests from '../utils/request/request';

export const getlist = async () => {
  try {
    const res = await requests.get('news/news-list');
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getDetail = async (id) => {
  try {
    const res = await requests.getDetail(`news/news-detail/${id}`);
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createNews = async (content_text, image) => {
  try {
    const res = await requests.post('news/news-create', {
      content_text,
      image,
    });
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deletedNews = async (id) => {
  try {
    const res = await requests.deleted(`news/news-delete/${id}`);
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};
