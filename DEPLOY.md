# 🚀 Fleet Dashboard - GitHub Pages Deployment Guide

## Quick Deploy (5 minutes)

### Step 1: Open Terminal
Open PowerShell or Command Prompt in the fleet-dashboard folder:
```bash
cd C:\Users\lea\David-Schy-workspace\CLAWDBOT\PROJECTS\fleet-dashboard
```

### Step 2: Initialize Git (if not done)
```bash
git init
git add .
git commit -m "Initial fleet dashboard"
```

### Step 3: Create GitHub Repository
**Option A - Using gh CLI (if installed):**
```bash
gh repo create fleet-dashboard --public --source=. --push
```

**Option B - Manual:**
1. Go to https://github.com/new
2. Repository name: `fleet-dashboard`
3. Make it Public
4. Don't initialize with README (we already have one)
5. Click "Create repository"
6. Copy the push commands shown:
```bash
git remote add origin https://github.com/[your-username]/fleet-dashboard.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository: https://github.com/[your-username]/fleet-dashboard
2. Click **Settings** tab
3. Click **Pages** in left sidebar
4. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main** (or master)
   - Folder: **/(root)**
5. Click **Save**
6. Wait 1-2 minutes for deployment

### Step 5: View Your Dashboard
Your dashboard will be live at:
```
https://[your-username].github.io/fleet-dashboard/
```

---

## 📁 Files Included

| File | Description |
|------|-------------|
| `index.html` | Main dashboard with all metrics |
| `README.md` | Project documentation |
| `DEPLOY.md` | This file |

---

## 🔗 Quick Links After Deployment

- **Dashboard:** https://[username].github.io/fleet-dashboard/
- **Repository:** https://github.com/[username]/fleet-dashboard
- **Settings:** https://github.com/[username]/fleet-dashboard/settings/pages

---

## 💡 Tips

1. **Auto-update:** The dashboard auto-refreshes every 5 minutes
2. **Customization:** Edit `index.html` to change any content
3. **SSL:** GitHub Pages provides free SSL automatically
4. **Custom domain:** You can add your own domain in Settings → Pages

---

## ❓ Troubleshooting

**"Page not found" after deployment?**
- Wait 2-3 minutes for GitHub to finish building
- Check the deployment status in Settings → Pages

**Images broken?**
- Make sure all file paths are relative (start with `./`)
- Don't use absolute paths

**Changes not showing?**
- Commit and push your changes:
```bash
git add .
git commit -m "Update dashboard"
git push
```

---

*Built by Genii AI 🤖*
