import { Breadcrumb } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { InsertRowAboveOutlined, HomeOutlined } from '@ant-design/icons';
import CreateHospitalAgent from './CreateHospitalAgent';
import HospitalAgentTable from './HospitalAgentTable';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getAgentsAction from '../../../redux/actions/organisation/getAgents';

const HospitalAgent = ({ getAgentsState, agentPayload, getAgentsAction /** //TODO: userState */ }) => {
  const [items, setItems] = useState([]);
  const [userOrganisation] = useState({ id: '1' });
  const [currentPage, setCurrentPage] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  //TODO: ADD ORGANISATION ID WHEN AVAILABLE ON LOGIN
  // useEffect(() => {
  //   if(userState){
  //     setUserOrganisation(userState.organisation);
  //   }
  // }, [userState]);

  useEffect(() => {
    //TODO: ADD ORGANISATION ID WHEN AVAILABLE ON LOGIN
    // if(userOrganisation){
    getAgentsAction({ page: currentPage, organisationId: userOrganisation.id });
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
          <span>Agents</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <br />
      <CreateHospitalAgent organisationId={userOrganisation.id || '0'} />
      <HospitalAgentTable
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

HospitalAgent.propTypes = {
  getAgentsState: PropTypes.object,
  agentPayload: PropTypes.object,
  getAgentsAction: PropTypes.func
};

const mapStateToProps = (state) => ({
  getAgentsState: state.organisation.getAgents,
  agentPayload: state.organisation.agentPayload,
  userState: state.user.user
});

export default connect(mapStateToProps, { getAgentsAction })(HospitalAgent);
