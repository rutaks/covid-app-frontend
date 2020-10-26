import { Breadcrumb } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { InsertRowAboveOutlined, HomeOutlined } from '@ant-design/icons';
import CreateAgent from './CreateAgent';
import AgentTable from './AgentTable';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getAgentsAction from '../../../redux/actions/hospital/getAgents';

const Agent = ({ getAgentsState, agentPayload, getAgentsAction }) => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  useEffect(() => {
    getAgentsAction({ page: currentPage });
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
          <span>Hospitals</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <br />
      <CreateAgent itemsArr={items} />
      <AgentTable
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

Agent.propTypes = {
  getAgentsState: PropTypes.object,
  agentPayload: PropTypes.object,
  getAgentsAction: PropTypes.func
};

const mapStateToProps = (state) => ({
  getAgentsState: state.hospital.getAgents,
  agentPayload: state.hospital.agentPayload
});

export default connect(mapStateToProps, { getAgentsAction })(Agent);
