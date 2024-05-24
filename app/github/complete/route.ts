import db from "@/lib/db";
import getAccessToken from "@/lib/github/getAccessToken";
import getGithubProfile from "@/lib/github/getGithubProfile";
import getSession from "@/lib/session";
import LogIn from "@/lib/utils";
import { notFound, redirect } from "next/navigation";
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
  const user = await db.user.findUnique({
    where: {
      github_id: id + "",
    },
    select: {
      id: true,
    },
  });
  if (user) {
    await LogIn(user.id);
    return redirect("/profile");
  }

  const newUser = await db.user.create({
    data: {
      username: login,
      github_id: id + "",
      avatar: avatar_url,
    },
    select: {
      id: true,
    },
  });
  await LogIn(newUser.id);
  return redirect("/profile");
}
