import React, { useEffect, useState } from "react";
import { z } from "zod";

const githubRepoDataSchema = z.object({
  stargazers_count: z.number(),
});

const fetchGithubRepoStats = async () => {
  const response = await fetch("https://api.github.com/repos/facebook/react");

  if (response.status !== 200) {
    throw new Error(
      `fetching repo data returned status code ${response.status}, expected 200`,
    );
  }

  const data = await response.json();

  return githubRepoDataSchema.parse(data);
};

export const GithubRepoStats: React.FunctionComponent = () => {
  const [stargazersCount, setStargazersCount] = useState(0);

  useEffect(() => {
    fetchGithubRepoStats().then((data) => {
      console.log(data);
      setStargazersCount(data.stargazers_count);
    });
  }, []);

  if (stargazersCount === 0) {
    return <div>Loading…</div>;
  }

  return (
    <div>
      🌠✨ facebook/react hat {stargazersCount.toLocaleString()} Sternchen ⭐
    </div>
  );
};
