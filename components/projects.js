import useSWR from "swr";

export default function Projects() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data } = useSWR("/api/github", fetcher);

  return (
    <>
      <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-10 text-center md:text-left">
        Some projects
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {data &&
          data.repos &&
          data.repos.map((repo, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded border border-gray-200 shadow-sm"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 truncate">
                {repo.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700">
                {repo.description}
              </p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Go to repository
              </a>
            </div>
          ))}
      </div>
    </>
  );
}
