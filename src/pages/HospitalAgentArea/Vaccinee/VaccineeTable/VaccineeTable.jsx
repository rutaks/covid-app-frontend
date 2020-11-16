import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'antd';
import { Table } from 'antd';
import Column from 'antd/lib/table/Column';

const VaccineeTable = ({
  totalElements = 0,
  currentPage = 0,
  setCurrentPage = () => {},
  isLoading = true,
  itemArr = [],
  style = {}
}) => {
  const onChange = (page) => {
    setCurrentPage(page - 1);
  };

  return (
    <div style={style}>
      <Divider orientation="left" style={{ fontSize: '15px' }}>
        Vaccinee List
      </Divider>
      <br />
      <Table
        rowKey="index"
        pagination={{
          onChange: onChange,
          current: currentPage,
          total: totalElements
        }}
        loading={isLoading}
        dataSource={itemArr}
      >
        <Column title="ID" dataIndex="index" />
        <Column title="Name" dataIndex="names" />
        <Column title="Email" dataIndex="email" />
        <Column title="Phone" dataIndex="phone" />
      </Table>
    </div>
  );
};

VaccineeTable.propTypes = {
  totalElements: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  isLoading: PropTypes.bool,
  itemArr: PropTypes.array,
  deleteItem: PropTypes.func,
  style: PropTypes.object
};

export default VaccineeTable;
