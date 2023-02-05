import fs from "fs";

const GITHUB_API = "https://api.github.com";
const REPOS_SUFFIX = "/users/Atticus64/repos";

async function getRepos() {
  const resp = await fetch(`${GITHUB_API}${REPOS_SUFFIX}`, {
    headers: {
      "Authorization": `Bearer ${process.env.TOKEN_GITHUB}`,
    },
  })
  const r = await resp.json()
  const filterRepos = r.filter((r) => {
    return r.private != true;
  })

  const repos = filterRepos.map((repo) => {

    return {
      id: repo.id,
      name: repo.name,
      html_url: repo.html_url,
      description: repo.description,
      fork: repo.fork,
      url: repo.url,
      // contribuitors,
      deployments_url: repo.deployments_url,
      created_at: repo.created_at,
      updated_at: repo.updated_at,
      homepage: repo.homepage,
      stargazers_count: repo.stargazers_count,
      language: repo.language,
      license: repo.license,
      topics: repo.topics,
      forks: repo.forks,
    }
  })

  const data = JSON.stringify(repos, null, "\t");
  fs.writeFile("data/repos.json", data);

}



getRepos()

