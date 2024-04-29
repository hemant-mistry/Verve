"use server";
import supabaseServer from "../../../lib/supabase/server";

export async function createNote(contents: string, flushAfter24Hours: boolean) {
  const supabase = supabaseServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);
  const userId = user?.id;
  const { data, error } = await supabase
    .from("posts")
    .insert([
      {
        user_id: userId,
        content: contents,
        flush_after_24_hours: flushAfter24Hours,
      },
    ])
    .select();

  const daterightNow = new Date();
  console.log("Current date time data: ", daterightNow);

  if (error) {
    console.error("error", error);
  } else {
    console.log("User Data: ", data);
    let { data: profiles, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId);

    if (error) {
      console.error("error", error);
    } else {
      console.log("All posts of a particular user", profiles);
    }

    const streaks = profiles?.[0].streaks || [];
    const streakExists = streaks.includes(daterightNow);

    if (streakExists) {
      console.log("streak exists");
    } else {
      const { data: notes, error: err } = await supabase
        .from("profiles")
        .update([
          { streaks: streaks.concat(daterightNow) },
          { streaks: (profiles?.[0].streaks || []).concat(daterightNow) },
        ])
        .eq("id", userId);

      if (err) {
        console.error("error", err);
      }
    }
  }

  return data;
}

export async function getStreaks() {
  const supabase = supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const userId = user?.id;
  const { data, error } = await supabase
    .from("profiles")
    .select("streaks")
    .eq("id", userId);

  console.log("data", data?.[0].streaks);

  const sortedDates = data?.[0].streaks.sort((a: string, b: string) => {
    return new Date(a).getTime() - new Date(b).getTime();
  });

  console.log("sortedDates", sortedDates);

  if (error) {
    console.error("error", error);
  }
  return sortedDates;
}
