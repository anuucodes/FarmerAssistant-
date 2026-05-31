# Jeevika — Farmer Assistant Platform

A final-year project web application built with plain HTML, CSS, and vanilla JavaScript.
No frameworks, no npm, no build tools required for the frontend.

---

## Project Structure

```
Jeevika_project/
├── frontend/                  ← Web app (HTML/CSS/JS)
│   ├── index.html             ← Login page (Firebase Phone OTP auth)
│   ├── dashboard.html         ← Dashboard with 4 module cards
│   ├── schemes.html           ← Government Schemes (6 cards + search)
│   ├── market.html            ← Mandi Bhaav (live AgMarknet API + fallback)
│   ├── disease.html           ← Disease Detection (integrated with ML backend)
│   ├── config.js              ← Firebase config + API keys
│   ├── theme.js               ← Night / Light mode toggle
│   ├── translations.js        ← English / Hindi translation strings
│   ├── style.css              ← Global styles + CSS variables
│   └── README.md              ← This file
└── disease_backend/           ← Python FastAPI ML backend
    ├── main.py                ← FastAPI app (image + text prediction endpoints)
    ├── requirements.txt       ← Python dependencies
    ├── download_mobilenet_model.py ← Script to download the image model
    └── models/
        ├── label_map.json     ← Class labels for image model
        ├── best_model/        ← Text classification model (download separately)
        └── mobilenet_plantdisease/ ← MobileNetV2 image model (download separately)
```

---

## Setup Instructions

### Part 1 — Disease Detection Backend (Python)

The disease detection page calls a local FastAPI server at `http://127.0.0.1:8000`.
You must start this before using the Analyze button.

**Step 1 — Install Python dependencies**
```bash
cd disease_backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

**Step 2 — Download the ML models**
```bash
python download_mobilenet_model.py
```
The `models/` directory must contain:
- `models/mobilenet_plantdisease/` — MobileNetV2 image classification model
- `models/best_model/` — Text classification model (HuggingFace format)

**Step 3 — Start the backend server**
```bash
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```
Leave this terminal running while you use the app.

**API Endpoints:**
- `GET  /` — Health check
- `POST /predict-image` — Upload a leaf image → returns disease label, confidence, treatment
- `POST /predict-text` — Send symptom description text → returns disease label, confidence, treatment

---

### Part 2 — Frontend (HTML/CSS/JS)

**Step 1 — Verify Firebase config**
Open `frontend/config.js` and confirm the `firebaseConfig` object matches your Firebase project.
Credentials are pre-filled for the `jeevika-f683f` project.

**Step 2 — Enable Phone Authentication in Firebase Console**
1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Select the **jeevika-f683f** project
3. Navigate to **Authentication → Sign-in method**
4. Enable **Phone** as a sign-in provider
5. Add your domain (or `localhost`) to the **Authorised domains** list

**Step 3 — Serve the frontend over HTTP**
Firebase Phone Auth will not work with `file://` URLs. Serve via HTTP:

**Option A — VS Code Live Server (recommended)**
1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code
2. Right-click `frontend/index.html` → **Open with Live Server**
3. Browser opens at `http://127.0.0.1:5500/index.html`

**Option B — Python built-in server**
```bash
cd frontend
python -m http.server 5500
# Then open http://localhost:5500 in your browser
```

---

## Features

| Feature | Status |
|---|---|
| Firebase Phone OTP Login | ✅ Live |
| Night / Light Mode | ✅ Live |
| English / Hindi Toggle | ✅ Live |
| Government Schemes (6 cards + search) | ✅ Live |
| Mandi Bhaav — Live API | ✅ Live (with fallback) |
| Mandi Bhaav — Fallback Data | ✅ Live |
| Disease Detection — Image Upload | ✅ Live (requires backend) |
| Disease Detection — ML Backend | ✅ Integrated (FastAPI + MobileNetV2) |
| Farmer Community | 🔜 Coming soon |

---

## Tech Stack

### Frontend
- **HTML5 / CSS3 / Vanilla JavaScript** — no frameworks
- **Firebase v10** (Auth) via CDN
- **data.gov.in AgMarkNet API** — live crop market prices
- **Google Fonts** — Poppins + Playfair Display

### Disease Detection Backend
- **FastAPI** — Python web framework
- **PyTorch + TorchVision** — MobileNetV2 image classification
- **HuggingFace Transformers** — text-based disease classification
- **Pillow** — image preprocessing

---

## Notes for Developers

- All frontend pages share `style.css`, `theme.js`, `translations.js`, and `config.js`
- Theme and language preferences are saved to `localStorage` and persist across pages
- To add a new UI string: add the key to both `en` and `hi` objects in `translations.js`, then add `data-key="yourKey"` to the HTML element
- The `t('key')` helper in any inline script returns the current-language string
- The disease backend URL is hardcoded as `http://127.0.0.1:8000` in `disease.html` — update this constant if you deploy the backend remotely

---

## Firebase Security Note

For production deployment, set Firestore security rules and restrict the API key
in the Firebase Console under **Project Settings → API restrictions**.
