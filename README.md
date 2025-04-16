# 🌐 Language-Agnostic Visualization Web Application

This is a full-stack web application that allows users to write and run **Python** or **R** code to generate **2D and 3D visualizations** in real time. The app supports both **static** (e.g., Matplotlib, ggplot2) and **interactive** (e.g., Plotly, rgl) charts and renders the output as images or embedded HTML.


---

## ✨ Features

- 🖊️ **Language toggle** — Choose between Python and R
- 💡 **Code editor** — Write and submit visualization code interactively
- 📊 **2D Visualization support**:
  - Python: Matplotlib, Plotly
  - R: ggplot2, Plotly
- 🧊 **3D Visualization support**:
  - Python: Plotly (interactive)
  - R: rgl + htmlwidgets
- 📎 **Prebuilt sample scripts** — One-click insert and run
- 🔁 **Dynamic output rendering** using `<img>` or `<iframe>`
- 🐳 Fully **containerized with Docker Compose**

---

## 🧰 Tech Stack

| Layer       | Stack                                             |
|-------------|---------------------------------------------------|
| Frontend    | Angular 16+, SCSS                                 |
| Backend     | Flask, Gunicorn, Python 3.9                       |
| Data Viz    | Python: `matplotlib`, `plotly`, `numpy`           |
|             | R: `ggplot2`, `plotly`, `rgl`, `htmlwidgets`      |
| Container   | Docker + Docker Compose                           |
| Communication | RESTful API over `/api/visualize`              |

---

## 📦 Folder Structure

```
visualization-app/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── routes.py
│   │   └── visualization_engine.py
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/
│   ├── src/app/
│   │   ├── home/
│   │   ├── visualization-editor/
│   │   └── visualization-display/
│   ├── angular.json
│   └── Dockerfile
├── docker-compose.yml
├── .dockerignore (frontend + backend)
├── README.md
└── Makefile (optional)
```

---

## 🚀 How to Run Locally

### ✅ Prerequisites
- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)


> 💡 **Important:** Your Python or R code **must include a save command** to generate a visualization:
>
> - Python static (Matplotlib): `plt.savefig("output.png")`
> - Python interactive (Plotly): `fig.write_html("output.html")`
> - R static (ggplot2): `ggsave("output.png", p)`
> - R interactive (Plotly/rgl): `htmlwidgets::saveWidget(...)`

### 🧪 Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/koushik-00/Language-Agnostic-Visualization-Web-App.git
cd Language-Agnostic-Visualization-Web-App

# 2. Build and run the app
docker-compose up --build

# Or
make build
make up
```

🖥 Open your browser and go to **http://localhost**

---

## 🔧 Developer Workflow (Optional)

With a `Makefile`:

```bash
make build       # Builds containers
make up          # Runs the app
make down        # Stops the app
make logs        # View logs
```

---

## 🛠 Functionality Details

| Feature                        | Details                                                                      |
|-------------------------------|------------------------------------------------------------------------------|
| **Language toggle**           | Select Python or R in the code editor                                       |
| **Code execution**            | Python or R code is executed in an isolated container environment           |
| **Output rendering**          | Static images rendered as PNG; interactive outputs embedded via iframe      |
| **Sample scripts**            | Buttons insert working examples (2D and 3D) into the editor                 |
| **3D Visualization (Python)** | Built with Plotly; saved as `output.html`                                   |
| **3D Visualization (R)**      | Built with `rgl`; saved as interactive HTML via `htmlwidgets::saveWidget()` |
| **Dockerized**                | Backend and frontend containers communicate via Docker bridge network       |

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