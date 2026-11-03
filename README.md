# TV Dashboard

An always-on dashboard for a TV: clock, live weather, today's Google Calendar events, sports scores, and fitness progress. It's a plain HTML page with no build step.

## Setup

1. Copy `config.example.js` to `config.js`.
2. Edit `config.js`: your location (`lat`, `lon`), your teams, and your fitness goals.
3. Open `index.html` in a browser and press F11 for full screen.

`config.js` is listed in `.gitignore`, so your settings and calendar URL are never committed.

## Google Calendar

A web page can't read Google Calendar directly, so a small Apps Script runs under your account and returns today's events.

1. Go to https://script.google.com and create a **New project**.
2. Replace the starter code with:

```javascript
function doGet() {
  const now = new Date();
  const out = [];
  CalendarApp.getAllOwnedCalendars().forEach(cal => {
    cal.getEventsForDay(now).forEach(e => out.push({
      title: e.getTitle(),
      start: e.getStartTime().toISOString(),
      end: e.getEndTime().toISOString(),
      allDay: e.isAllDayEvent(),
      location: e.getLocation()
    }));
  });
  return ContentService.createTextOutput(JSON.stringify(out))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click **Deploy > New deployment > Web app**. Set **Execute as** to *Me* and **Who has access** to *Anyone*, then authorize calendar access.
4. Paste the Web app URL into `calendarUrl` in `config.js`.

Treat that URL like a password: anyone with the link can read your events. Never put it in a file that is committed.

## Data sources

- Weather: [Open-Meteo](https://open-meteo.com) (free, no key)
- Scores: ESPN's unofficial scoreboard feed (may change without notice)
- Fitness: entered by hand in `config.js` for now

## Updating the TV computer

```
git pull
```

Your `config.js` is untouched by pulls because it isn't tracked.
