import { Octokit } from "octokit";

export default async function handler(req, res) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_API_TOKEN,
  });

  try {
    const response = await octokit.request("GET /users/{username}/repos", {
      username: "mitermitek",
    });

    return res
      .setHeader("Content-Type", "application/json")
      .setHeader(
        "Cache-control",
        "public, s-maxage=1200, stale-while-revalidate=600"
      )
      .status(200)
      .json({ repos: response.data });
  } catch (error) {
    res.status(500).send(error.response.data);
  }
}
