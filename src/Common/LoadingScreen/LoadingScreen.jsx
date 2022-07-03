import React, { useState, useEffect } from "react";
import CircleLoader from "react-spinners/ClipLoader";

const LoadingScreen = () => {
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div>
      {loading ? (
        <CircleLoader loading={loading} color={"red"} size={500} />
      ) : null}
    </div>
  );
};
export default LoadingScreen;
