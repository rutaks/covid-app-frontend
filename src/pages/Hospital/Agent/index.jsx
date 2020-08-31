import { Breadcrumb } from 'antd';
import React, { Fragment } from 'react';
import { InsertRowAboveOutlined, HomeOutlined } from '@ant-design/icons';
import CreateAgent from './CreateAgent';

const Agent = () => {
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
      <CreateAgent />
    </Fragment>
  );
};

export default Agent;
