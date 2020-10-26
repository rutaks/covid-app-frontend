import { Breadcrumb } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { InsertRowAboveOutlined, HomeOutlined } from '@ant-design/icons';
import HospitalTable from './HospitalTable';
import { connect } from 'react-redux';
import getHospitalsAction from '../../redux/actions/hospital/getHospitals';
import PropTypes from 'prop-types';
import CreateHospital from './CreateHospital';

const Hospital = ({ getHospitalsState, hospitalPayload, getHospitalsAction }) => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  useEffect(() => {
    getHospitalsAction({ page: currentPage });
  }, [getHospitalsAction, currentPage]);

  useEffect(() => {
    if (hospitalPayload.content) {
      const response = hospitalPayload.content.map((item, index) => {
        return { ...item, index: index + 1 + 10 * currentPage };
      });
      setItems(response);
      setTotalElements(hospitalPayload.totalElements);
    }
  }, [hospitalPayload, currentPage]);

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
      <CreateHospital />
      <HospitalTable
        currentPage={currentPage + 1}
        totalElements={totalElements}
        isLoading={getHospitalsState.loading}
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

Hospital.propTypes = {
  getHospitalsState: PropTypes.object,
  hospitalPayload: PropTypes.object,
  getHospitalsAction: PropTypes.func
};

const mapStateToProps = (state) => ({
  getHospitalsState: state.hospital.getHospitals,
  hospitalPayload: state.hospital.hospitalPayload
});

export default connect(mapStateToProps, { getHospitalsAction })(Hospital);
