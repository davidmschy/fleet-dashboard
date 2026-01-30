# Fleet Dashboard

**Live URL:** https://genii-ai.github.io/fleet-dashboard

A real-time dashboard for monitoring the Genii agent fleet.

## Features

- 📊 **Live Metrics** - Revenue, leads, content posts
- 🤖 **Agent Status** - Running/stopped/healthy
- ⚙️ **Automation Control** - Trigger, pause, resume
- 📈 **Trend Analysis** - Daily/weekly/monthly views

## Quick Start

```bash
# Run locally
cd fleet/dashboard
npx serve .

# Deploy to GitHub Pages
npm run deploy
```

## Tech Stack

- Vanilla HTML/CSS/JS (no build required)
- GitHub Actions for deployment
- HATEOAS API integration

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| `/api/v1/agents` | List all agents |
| `/api/v1/agents/{id}` | Agent details |
| `/api/v1/automations` | List automations |
| `/api/v1/metrics` | Fleet metrics |
| `/api/v1/health` | System health |

## Screenshots

[Add screenshots here]

---

*Part of Genii HATEOAS Platform*
