import { Breadcrumb } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { InsertRowAboveOutlined, HomeOutlined } from '@ant-design/icons';
import CreateAdmin from './CreateAdmin';
import AdminTable from './AdminTable';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getAdminsAction from '../../../redux/actions/hospital/getAdmins';

const Admin = ({ getAdminsState, adminPayload, getAdminsAction }) => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  useEffect(() => {
    getAdminsAction({ page: currentPage });
  }, [getAdminsAction, currentPage]);

  useEffect(() => {
    if (adminPayload.content) {
      const response = adminPayload.content.map((item, index) => {
        return { ...item, index: index + 1 + 10 * currentPage };
      });
      setItems(response);
      setTotalElements(adminPayload.totalElements);
    }
  }, [adminPayload, currentPage]);

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
      <CreateAdmin itemsArr={items} />
      <AdminTable
        currentPage={currentPage + 1}
        totalElements={totalElements}
        isLoading={getAdminsState.loading}
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

Admin.propTypes = {
  getAdminsState: PropTypes.object,
  adminPayload: PropTypes.object,
  getAdminsAction: PropTypes.func
};

const mapStateToProps = (state) => ({
  getAdminsState: state.hospital.getAdmins,
  adminPayload: state.hospital.adminPayload
});

export default connect(mapStateToProps, { getAdminsAction })(Admin);
