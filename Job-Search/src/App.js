import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import {Container} from 'react-bootstrap';
import Job from './Job';
import JobPages from './JobPages';
import SearchForm from './SearchForm';

function App() {

  const [ params, setParams ] = useState({})
  const [ page, setPage ] = useState(1)

  const { jobs, loading, error, hasNextPage } = useFetchJobs( params, page )

  function handleSearchChange(evnt) {
    const param = evnt.target.name
    const value = evnt.target.value
    setPage(1)
    setParams( prvParams => {
      return {...prvParams, [param]: value}
    })
  }


  return (
    <Container
      className='my-4'
    > 
      <div style={{...styles.headerDiv}}>
        <h1 style={{...styles.headText}}>
          Software Engineering Jobs 
        </h1>
      </div>
      <SearchForm 
        params={params} onParamChange={handleSearchChange}
      />
      {!loading && <JobPages page={page} setPage={setPage} hasNextPage={hasNextPage}/>}
      <div
        style={{ ...styles.container }}
      >
        {loading && <h1 style={{...styles.messageText}}>Loading...</h1>}
        {error && <h1 style={{...styles.messageText}}>An Error Occured, Refresh Page...</h1>}
      </div>
        {jobs.map( job => {
          return <Job key={job.id} job={job} />
        })}
        {!loading && <JobPages page={page} setPage={setPage} hasNextPage={hasNextPage}/>}

    </Container>
  );
}

const styles = {
  container: {
    textAlign: 'center',
  },
  messageText: {
    color: 'white',
    marginTop: '20%',
  },
  headText: {
    color: 'white',
    textShadow: '2px 2px black',
    fontWeight: 500,
    borderBottom: 'solid #444 3px',
    padding: 10,
  },
  headerDiv: {
    width: "100%",
    textAlign: 'center',
    padding: 75,
    paddingLeft: 0,
    paddingRight: 0,
  }
}

export default App;
