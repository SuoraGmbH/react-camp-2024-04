/* eslint-disable @typescript-eslint/no-unused-vars */

const fetchGithubRepoStats = () => {
  const responsePromise = fetch("https://api.github.com/repos/facebook/react");
  responsePromise.then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
};

const fetchGithubRepoStatsShorter = () => {
  fetch("https://api.github.com/repos/facebook/react").then((response) => {
    response.json().then((data) => {
      console.log(data);
    });
  });
};

const fetchGithubRepoStatsShorter2 = () => {
  return fetch("https://api.github.com/repos/facebook/react")
    .then((response) => response.json())
    .then((data) => data);
};

const fetchGithubRepoStatsWithAsyncAwait = async () => {
  const response = await fetch("https://api.github.com/repos/facebook/react");
  const data = await response.json();

  return data;
};

const fetchGithubRepoStatsWithAsyncAwaitShorter = async () => {
  const response = await fetch("https://api.github.com/repos/facebook/react");
  return response.json();
};

// Streckenweise lesbar
const fetchGithubRepoStatsWithAsyncAwaitShortest = async () =>
  (await fetch("https://api.github.com/repos/facebook/react")).json();

// Wir könenn die async-funktion auch mit then verwenden
// fetchGithubRepoStatsWithAsyncAwaitShortest().then()
