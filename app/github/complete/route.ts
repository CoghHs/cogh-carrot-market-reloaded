import db from "@/lib/db";
import getAccessToken from "@/lib/github/getAccessToken";
import getGithubEmail from "@/lib/github/getGithubEmail";
import getGithubProfile from "@/lib/github/getGithubProfile";
import isExistUsername from "@/lib/isExistUsername";
import LogIn from "@/lib/utils";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  if (!code) {
    return new Response(null, {
      status: 400,
    });
  }
  const { error, access_token } = await getAccessToken(code);
  if (error) {
    return new Response(null, {
      status: 400,
    });
  }
  const { id, login, avatar_url } = await getGithubProfile(access_token);
  const email = await getGithubEmail(access_token);
  const user = await db.user.findFirst({
    where: {
      OR: [{ email: email ?? "" }, { github_id: id + "" }],
    },
    select: {
      id: true,
    },
  });
  if (user) {
    await LogIn(user.id);
    return redirect("/profile");
  }
  const isExist = await isExistUsername(login);
  const newUser = await db.user.create({
    data: {
      username: isExist ? `${login}-gh` : login,
      github_id: id + "",
      avatar: avatar_url,
      email,
    },
    select: {
      id: true,
    },
  });
  await LogIn(newUser.id);
  return redirect("/profile");
}
