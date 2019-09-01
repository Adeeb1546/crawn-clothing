import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const Withspinner = WrappedComponent => {
  const Spinner = ({ isloading, ...otherprops }) => {
    return isloading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherprops} />
    );
  };
  return Spinner;
};
export default Withspinner;
