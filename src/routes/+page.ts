import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { AuthData } from "$lib/types/auth";

export const load = (async ({ parent }) => {
  const data = (await parent()) as { auth: AuthData };

  if (!data.auth.isAuthenticated) {
    throw redirect(307, "/auth");
  }

  return {
    auth: data.auth,
  };
}) satisfies PageLoad;
