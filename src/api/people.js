import request, * as requests from '../utils/request/request';

export const getInfo = async (
  people_name,
  birthday,
  address,
  dad_name,
  mom_name,
  coalpeople_name
) => {
  try {
    const res = await requests.post('people/people-advancedSearch', {
      people_name,
      birthday,
      address,
      dad_name,
      mom_name,
      coalpeople_name,
    });
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};
