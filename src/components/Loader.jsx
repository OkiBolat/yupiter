// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={1}
    width={326}
    height={416}
    viewBox="0 0 330 416"
    backgroundColor="#e0e0e0"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="17" ry="17" width="330" height="416" />
  </ContentLoader>
);

export default MyLoader;
