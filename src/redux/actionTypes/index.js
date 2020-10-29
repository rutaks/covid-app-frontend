import { apiActionTypes as api } from './apiActionTypes';
import { userActionTypes as user } from './userActionTypes';
import { hospitalActionTypes as hospital } from './hospitalActionTypes';
import { organisationActionTypes as organisation } from './organisationActionTypes';
import { adminActionTypes as admin } from './adminActionTypes';
import { agentActionTypes as agent } from './agentActionTypes';

/**
 * A variable that should store all action types in project
 * @since version 1.0
 */
export const actionTypes = {
  api,
  user,
  hospital,
  organisation,
  admin,
  agent
};
