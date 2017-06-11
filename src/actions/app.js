import { APP_LOAD } from 'constants/action-types';

export const loadApp = () => {
  return {
    type: APP_LOAD,
  };
};

export default { loadApp };
