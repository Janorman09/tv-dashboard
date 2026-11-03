// Copy this file to config.js and fill in your own details.
// config.js is ignored by git, so your private settings never get uploaded.
// Edit the values below, then reload the dashboard.
const CONFIG = {
  place: "Monroe, MI",
  lat: 41.9164, lon: -83.3977,
  units: "fahrenheit",              // or "celsius"
  // Paste your Google Apps Script web app URL here (setup steps are in README.md).
  // Leave empty to use the manual schedule below instead.
  calendarUrl: "",
  // Teams to follow. Use words from the team name, e.g. "Lions".
  teams: [
    { league: "football/nfl",      match: "Lions" },
    { league: "basketball/nba",    match: "Pistons" },
    { league: "baseball/mlb",      match: "Tigers" },
    { league: "hockey/nhl",        match: "Red Wings" }
  ],
  // Daily schedule. Use 24-hour times. Repeats every day;
  // add a "day" (0=Sun ... 6=Sat) to limit an item to one weekday.
  schedule: [
    { time: "07:00", title: "Workout" },
    { time: "09:00", title: "Team check-in" },
    { time: "12:30", title: "Lunch" },
    { time: "17:30", title: "Groceries" },
    { time: "19:00", title: "Dinner with family", day: 5 }
  ],
  // Fitness numbers. Update by hand for now; hooking up Fitbit/Strava/Apple Health comes later.
  fitness: [
    { label: "Steps",          value: 6200, goal: 10000, unit: "" },
    { label: "Active minutes", value: 25,   goal: 45,    unit: " min" },
    { label: "Workouts this week", value: 2, goal: 4,    unit: "" }
  ],
  refreshMinutes: { weather: 15, scores: 1 }
};
