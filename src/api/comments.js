import * as request from '../utils/request/request';

export const createComment = async (
  comment_text,
  report_id,
  post_id,
  tvShow_id,
  news_id,
  token
) => {
  try {
    const comment = await request.post(
      'comment/comment-create',
      {
        comment_text,
        report_id,
        post_id,
        tvShow_id,
        news_id,
      },
      token
    );
    return comment;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getComment = async () => {
  try {
    const res = await request.get('comment/comment-list');
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};
