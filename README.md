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
```

Then open your browser at [http://localhost:4200](http://localhost:4200)

---

## 📁 Project Structure

```
.
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── routes.py
│   │   └── visualization_engine.py
│   └── run.py
├── frontend/
│   └── src/app/...
├── static/
│   └── visualizations/
├── requirements.txt
├── README.md
```

---

## 📊 Example Visualizations

### Python
- ✅ Static: `matplotlib` bar chart
- ✅ Interactive: `plotly` scatter plot
- ✅ 3D (optional): `plotly` surface plot

### R
- ✅ Static: `ggplot2` bar chart
- ✅ Interactive: `plotly` via `htmlwidgets::saveWidget`
- ✅ 3D (optional): `rgl::plot3d` with WebGL output

---

## 🧠 Issues & Solutions

| Issue | Resolution |
|-------|------------|
| `plotly` not generating output | Installed `plotly`, verified `write_html()` |
| `Rscript` not executing | Installed required R packages (`plotly`, `htmlwidgets`) |
| CORS errors between Angular and Flask | Used `flask-cors` to allow cross-origin requests |
| HTML files not showing in UI | Added iframe support in Angular + DOM sanitizer |

---

## 🎥 Demo Video

📽 [Click here to watch the screen recording demo](https://your-demo-link-here.com)

---

## 📬 Submission

GitHub Repo: [https://github.com/koushik-00/Language-Agnostic-Visualization-Web-App](https://github.com/koushik-00/Language-Agnostic-Visualization-Web-App)

---

## 🙋 Author

Phaneendra Koushik Ballamudi  
Master’s in Data Science  
Indiana University Bloomington