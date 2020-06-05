import React, { useState } from "react";
import List from "./List";
import "./App.css";
import data from "./data.json";
import CurrentFilter from "./CurrentFilter";

function App() {
  const [jobFilter, setJobFilter] = useState([]);
  const addLanguage = (language) => {
    if (!jobFilter.includes(language)) {
      setJobFilter((jobFilter) => [...jobFilter, language]);
    }
  };

  const filteredJobs = () => {
    const d = data.filter((jobs) =>
      jobFilter.every((x) => jobs.languages.includes(x))
    );

    return d;
  };

  return (
    <div>
      <CurrentFilter jobFilter={jobFilter} />
      <List data={filteredJobs()} addLanguage={addLanguage} />
    </div>
  );
}

export default App;
