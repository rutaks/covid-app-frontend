import { Breadcrumb } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { InsertRowAboveOutlined, HomeOutlined } from '@ant-design/icons';
import CreateVaccinee from './CreateVaccinee';
import VaccineeTable from './VaccineeTable';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getVaccineesAction from '../../../redux/actions/vaccinee/getVaccinees';

const Vaccinee = ({ getVaccineesState, getVaccineesAction /** //TODO: userState */ }) => {
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
    // if(userHospital){
    getVaccineesAction({ page: currentPage });
    // }
  }, [getVaccineesAction, currentPage]);

  useEffect(() => {
    if (getVaccineesState.payload.content) {
      const response = getVaccineesState.payload.content.map((item, index) => {
        return { ...item, index: index + 1 + 10 * currentPage };
      });
      setItems(response);
      setTotalElements(getVaccineesState.payload.totalElements);
    }
  }, [getVaccineesState.payload, currentPage]);

  console.log(getVaccineesState);

  return (
    <Fragment>
      <Breadcrumb>
        <Breadcrumb.Item href="">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
          <InsertRowAboveOutlined />
          <span>Vaccinee</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <br />
      <CreateVaccinee hospitalId={userHospital.id || '0'} />
      <VaccineeTable
        currentPage={currentPage + 1}
        totalElements={totalElements}
        isLoading={getVaccineesState.loading}
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

Vaccinee.propTypes = {
  getVaccineesState: PropTypes.object,
  getVaccineesAction: PropTypes.func
};

const mapStateToProps = (state) => ({
  getVaccineesState: state.vaccinee.getVaccinees
});

export default connect(mapStateToProps, { getVaccineesAction })(Vaccinee);
