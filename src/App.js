import React, { useState } from "react";
import List from "./List";
import "./App.css";
import data from "./data.json";
import CurrentFilter from "./CurrentFilter";

function App() {
  const [jobFilter, setJobFilter] = useState([]);

  const addLanguage = (item) => {
    if (!jobFilter.includes(item)) {
      setJobFilter([...jobFilter, item]);
    }
  };

  const filteredJobs = () => {
    return data.filter((jobs) =>
      jobFilter.every(
        (x) =>
          jobs.languages.includes(x) ||
          jobs.role.includes(x) ||
          jobs.level.includes(x)
      )
    );
  };

  const removeTag = (value) => {
    setJobFilter(jobFilter.filter((tags) => tags !== value));
  };

  return (
    <div>
      <header className="header" />
      <CurrentFilter removeTag={removeTag} jobFilter={jobFilter} />
      <List data={filteredJobs()} addLanguage={addLanguage} />
    </div>
  );
}

export default App;
