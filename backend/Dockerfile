# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Install R and required packages
RUN apt-get update && apt-get install -y \
    r-base \
    r-cran-ggplot2 \
    r-cran-plotly \
    r-cran-htmlwidgets \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Python packages
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the current directory contents into the container
COPY . .

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Run the application with Gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "wsgi:app"]
