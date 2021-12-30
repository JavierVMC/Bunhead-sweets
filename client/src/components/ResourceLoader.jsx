import React, { useState, useEffect } from "react";

export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetch(resourceUrl);
      const data = await response.json();
      setState(data);
    })();
  }, [resourceUrl]);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }
        return child;
      })}
    </>
  );
};
