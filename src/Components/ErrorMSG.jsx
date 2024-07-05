import React from "react";

function Error() {
  return (
    <>
      <div className="d-none" id="submitErrorMessage">
        <div className="text-center text-danger mb-3">
          Error sending message!
        </div>
      </div>
    </>
  );
}
export default Error;
