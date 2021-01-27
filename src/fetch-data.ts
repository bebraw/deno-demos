const response = await fetch("https://api.github.com/orgs/denoland").then(
  (res) => res.json(),
);

console.log(response);
