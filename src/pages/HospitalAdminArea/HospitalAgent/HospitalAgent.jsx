import { Breadcrumb } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { InsertRowAboveOutlined, HomeOutlined } from '@ant-design/icons';
import CreateHospitalAgent from './CreateHospitalAgent';
import HospitalAgentTable from './HospitalAgentTable';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getHospitalAgentsAction from '../../../redux/actions/hospital/getHospitalAgents';

const HospitalAgent = ({
  getAgentsState,
  getHospitalAgentsAction
  /** //TODO: userState */
}) => {
  const [items, setItems] = useState([]);
  const [userHospital] = useState({ id: '1' });
  const [currentPage, setCurrentPage] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  //TODO: ADD ORGANISATION ID WHEN AVAILABLE ON LOGIN
  // useEffect(() => {
  //   if(userState){
  //     setUserHospital(userState.hospital);
  //   }
  // }, [userState]);

  useEffect(() => {
    //TODO: ADD ORGANISATION ID WHEN AVAILABLE ON LOGIN
    // if(userOrganisation){
    getHospitalAgentsAction({ page: currentPage, organisationId: userHospital.id });
    // }
  }, [getHospitalAgentsAction, currentPage]);

  useEffect(() => {
    if (getAgentsState.payload.content) {
      const response = getAgentsState.payload.content.map((item, index) => {
        return { ...item, index: index + 1 + 10 * currentPage };
      });
      setItems(response);
      setTotalElements(getAgentsState.payload.totalElements);
    }
  }, [getAgentsState.payload, currentPage]);

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
      <CreateHospitalAgent hospitalId={userHospital.id || '0'} />
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
  getHospitalAgentsAction: PropTypes.func
};

const mapStateToProps = (state) => ({
  getAgentsState: state.hospital.getAgents,
  agentPayload: state.hospital.agentPayload,
  userState: state.user.user
});

export default connect(mapStateToProps, { getHospitalAgentsAction })(HospitalAgent);
