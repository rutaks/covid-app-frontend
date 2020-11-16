import { Breadcrumb } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { InsertRowAboveOutlined, HomeOutlined } from '@ant-design/icons';
import CreateOrganisationAgent from './CreateOrganisationAgent';
import OrganisationAgentTable from './OrganisationAgentTable';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getAgentsAction from '../../../redux/actions/organisation/getAgents';

const OrganisationAgent = ({ getAgentsState, agentPayload, getAgentsAction /** //TODO: userState */ }) => {
  const [items, setItems] = useState([]);
  const [userOrganisation] = useState({ id: '1' });
  const [currentPage, setCurrentPage] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  //TODO: ADD ORGANISATION ID WHEN AVAILABLE ON LOGIN
  // useEffect(() => {
  //   if(userState){
  //     setUserHospital(userState.hospital);
  //   }
  // }, [userState]);

  useEffect(() => {
    // if(userOrganisation){
    getAgentsAction({ page: currentPage });
    // }
  }, [getAgentsAction, currentPage]);

  useEffect(() => {
    if (agentPayload.content) {
      const response = agentPayload.content.map((item, index) => {
        return { ...item, index: index + 1 + 10 * currentPage };
      });
      setItems(response);
      setTotalElements(agentPayload.totalElements);
    }
  }, [agentPayload, currentPage]);

  return (
    <Fragment>
      <Breadcrumb>
        <Breadcrumb.Item href="">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
          <InsertRowAboveOutlined />
          <span>Organisation</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <br />
      <CreateOrganisationAgent organisationId={userOrganisation.id || '0'} />
      <OrganisationAgentTable
        currentPage={currentPage + 1}
        totalElements={totalElements}
        isLoading={getAgentsState.loading}
        itemArr={items}
        setCurrentPage={setCurrentPage}
        style={styles.table}
      />
    </Fragment>
  );
};

const styles = {
  table: {
    paddingTop: '50px'
  },
  button: {
    marginLeft: '5px'
  }
};

OrganisationAgent.propTypes = {
  getAgentsState: PropTypes.object,
  agentPayload: PropTypes.object,
  getAgentsAction: PropTypes.func
};

const mapStateToProps = (state) => ({
  getAgentsState: state.organisation.getAgents,
  agentPayload: state.organisation.agentPayload
});

export default connect(mapStateToProps, { getAgentsAction })(OrganisationAgent);
