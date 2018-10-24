import React, { memo } from "react";
import logo from './logo.svg';

function Logo({ alt }) {
  return (
    <figure>
      <img src={logo} className="App-logo" alt={alt} />
      <figcaption>{alt}</figcaption>
    </figure>
  );
}

export default memo(Logo, (prevProps, nextProps) => {
  return prevProps.alt === nextProps.alt;
});
