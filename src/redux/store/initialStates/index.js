import { userInitialState as user } from './userInitialState';
import { hospitalInitialState as hospital } from './hospitalInitialState';
import { organisationInitialState as organisation } from './organisationInitialState';

/**
 * An object that should hold all initialStates from the system
 * @since version 1.0
 */
export const initialState = {
  user,
  hospital,
  organisation
};
