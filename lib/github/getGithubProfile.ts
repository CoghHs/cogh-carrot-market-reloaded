export default async function getGithubProfile(access_token: string) {
  const userProfileResponse = await (
    await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: "no-cache",
    })
  ).json();
  return userProfileResponse;
}
