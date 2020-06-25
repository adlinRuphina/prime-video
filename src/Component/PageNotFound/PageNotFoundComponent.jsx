import React, { Fragment } from 'react';

const PageNotFoundComponent = () => {
  return (
    <div>
      <Fragment>
        <div className="d-flex vh-100 align-item-center justify-content-center flex-direction-column"></div>
        <p style={{ color: 'red', fontSize: '30px' }}>opps page not found</p>
        <h1 style={{ color: 'red', fontSize: '100px' }}>404</h1>
      </Fragment>
    </div>
  );
};

export default PageNotFoundComponent;
