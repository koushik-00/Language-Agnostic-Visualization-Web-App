# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Install R and required packages
# Install R
RUN apt-get update && apt-get install -y \
    r-base \
    r-cran-ggplot2 \
    r-cran-plotly \
    r-cran-htmlwidgets \
    libcurl4-openssl-dev \
    libssl-dev \
    libxml2-dev \
    pandoc \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install R packages using Rscript
RUN Rscript -e "install.packages(c('ggplot2', 'plotly', 'htmlwidgets'), repos='https://cloud.r-project.org')"


# Install Python packages
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the current directory contents into the container
COPY . .

# Make port 5001 available to the world outside this container
EXPOSE 5001

# Run the application with Gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:5001", "wsgi:app"]