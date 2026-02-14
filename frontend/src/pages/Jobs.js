import axios from "axios";
import { useEffect, useState } from "react";

function Jobs(){
  const [jobs,setJobs] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/jobs")
      .then(res => setJobs(res.data));
  },[]);

  return(
    <div>
      <h2>Jobs</h2>
      {jobs.map(job => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>{job.location}</p>
        </div>
      ))}
    </div>
  );
}

export default Jobs;