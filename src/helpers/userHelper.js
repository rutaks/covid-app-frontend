export const ROLES = {
  HOSPITAL_ADMIN: 'ROLE_HOSPITAL_ADMIN',
  ORGANISATION_ADMIN: 'ROLE_ORGANISATION_ADMIN',
  SUPER_ADMIN: 'ROLE_SUPER_ADMIN',
  HOSPITAL_AGENT: 'ROLE_HOSPITAL_AGENT',
  ORGANISATION_AGENT: 'ROLE_ORGANISATION_AGENT'
};

const hasRespectiveRole = (userRole = '', targetRole = '') => {
  return userRole === targetRole;
};

export const isSuperAdmin = (userRole) => {
  return hasRespectiveRole(userRole, ROLES.SUPER_ADMIN);
};

export const isOrganisationAdmin = (userRole) => {
  return hasRespectiveRole(userRole, ROLES.ORGANISATION_ADMIN);
};

export const isHospitalAdmin = (userRole) => {
  return hasRespectiveRole(userRole, ROLES.HOSPITAL_ADMIN);
};

export const isHospitalAgent = (userRole) => {
  return hasRespectiveRole(userRole, ROLES.HOSPITAL_AGENT);
};
