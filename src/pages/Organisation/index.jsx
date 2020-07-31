import { Breadcrumb } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { InsertRowAboveOutlined, HomeOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import getOrganisationsAction from '../../redux/actions/organisation/getOrganisations';
import PropTypes from 'prop-types';
import OrganisationTable from './OrganisationTable';
import CreateOrganisation from './CreateOrganisation';

const Organisation = ({ getOrganisationsState, organisationPayload, getOrganisationsAction }) => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  useEffect(() => {
    getOrganisationsAction({ page: currentPage });
  }, [getOrganisationsAction, currentPage]);

  useEffect(() => {
    if (organisationPayload.content) {
      const response = organisationPayload.content.map((item, index) => {
        return { ...item, index: index + 1 + 10 * currentPage };
      });
      setItems(response);
      setTotalElements(organisationPayload.totalElements);
    }
  }, [organisationPayload, currentPage]);

  return (
    <Fragment>
      <Breadcrumb>
        <Breadcrumb.Item href="">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
          <InsertRowAboveOutlined />
          <span>Organisations</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <br />
      <CreateOrganisation />
      <OrganisationTable
        currentPage={currentPage + 1}
        totalElements={totalElements}
        isLoading={getOrganisationsState.loading}
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

Organisation.propTypes = {
  getOrganisationsState: PropTypes.object,
  organisationPayload: PropTypes.object,
  getOrganisationsAction: PropTypes.func
};

const mapStateToProps = (state) => ({
  getOrganisationsState: state.organisation.getOrganisations,
  organisationPayload: state.organisation.organisationPayload
});

export default connect(mapStateToProps, { getOrganisationsAction })(Organisation);
