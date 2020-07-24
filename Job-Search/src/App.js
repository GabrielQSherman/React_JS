import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import {Container} from 'react-bootstrap';
import Job from './Job';

function App() {

  const [ params, setParams ] = useState({})
  const [ page, setPage ] = useState(1)

  const { jobs, loading, error } = useFetchJobs( params, page )

  return (
    <Container
      className='my-4'
    >
    <div
      style={{ ...styles.container }}
    >
      {loading && <h1 style={{...styles.messageText}}>Loading...</h1>}
      {error && <h1 style={{...styles.messageText}}>An Error Occured, Refresh Page...</h1>}
    </div>
      {jobs.map( job => {
        return <Job key={job.id} job={job} />
      })}
    </Container>
  );
}

const styles = {
  container: {
    textAlign: 'center'
  },
  messageText: {
    color: 'white'
  }
}

export default App;
