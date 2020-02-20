import React from 'react';

import useData from '../hooks/use-data';

const Schedule = () => {
  const data = useData();
  return (
    <>
      <pre>Hello World</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
};

export default Schedule;
