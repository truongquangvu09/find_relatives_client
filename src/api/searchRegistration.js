import * as request from '../utils/request/request';

export const createSearchRegistration = async (
  report_name,
  report_birthday,
  report_gender,
  report_address,
  email,
  phone,
  cccd,
  date_report,
  people_name,
  people_birthday,
  people_gender,
  people_address,
  dad_name,
  mom_name,
  coal_people_name,
  brief_biography,
  people_image,
  searching_process,
  date_missing,
  last_seen,
  lost_reason,
  status,
  report_id
) => {
  try {
    const res = await request.post(
      'searchRegistrations/searchRegistrations-create',
      {
        report_name,
        report_birthday,
        report_gender,
        report_address,
        email,
        phone,
        cccd,
        date_report,
        people_name,
        people_birthday,
        people_gender,
        people_address,
        dad_name,
        mom_name,
        coal_people_name,
        brief_biography,
        people_image,
        searching_process,
        date_missing,
        last_seen,
        lost_reason,
        status,
        report_id,
      }
    );
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getList = async () => {
  try {
    const res = await request.get(
      'searchRegistrations/searchRegistrations-list'
    );
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getDetail = async (id) => {
  try {
    const res = await request.getDetail(
      `searchRegistrations/searchRegistrations-detail/${id}`
    );
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateRegistrations = async (id, status) => {
  try {
    const res = await request.update(
      `searchRegistrations/searchRegistrations-update/${id}`,
      status
    );
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteRegistrations = async (id) => {
  try {
    const res = await request.deleted(
      `searchRegistrations/searchRegistrations-delete/${id}`
    );
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};
