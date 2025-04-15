# Language Agnostic Visualization Web App
This project is a language-agnostic visualization web application built as part of the CNS SRES Summer 2025 assessment. It allows users to submit Python or R scripts that generate data visualizations, which are then rendered on the frontend. The application supports static, interactive, and 3D visualizations.

---

## 🚀 Features

- 🌐 Language selector: Python or R
- 🧠 Code editor with live script input
- 📊 Support for:
  - Static visualizations (e.g., matplotlib, ggplot2)
  - Interactive visualizations (e.g., Plotly)
  - 3D visualizations (e.g., Plotly 3D, rgl)
- 🔁 Unified visualization display component (img or iframe)
- 🧩 Seamless backend integration for safe execution

---

## 🛠 Tech Stack

| Layer      | Technology          |
|------------|---------------------|
| Frontend   | Angular              |
| Backend    | Flask (Python)       |
| Scripting  | Python, R            |
| Libraries  | matplotlib, plotly, ggplot2, htmlwidgets, rgl (optional) |

---

## 🧪 How to Run the Project

### Backend Setup (Flask)
```bash
cd backend
pip install -r requirements.txt
python3 run.py