import request, * as requests from '../utils/request/request';

export const getTvShow = async () => {
  try {
    const res = await request.get('tvShow/tvshow-list');
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getDetail = async (id) => {
  try {
    const res = await requests.getDetail(`tvShow/tvshow-detail/${id}`);
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};
