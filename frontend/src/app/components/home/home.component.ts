import { Component, OnInit, ViewChild } from '@angular/core';
import { VisualizationEditorComponent } from '../visualization-editor/visualization-editor.component';

interface Example {
  name: string;
  language: string;
  code: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  @ViewChild(VisualizationEditorComponent) editor!: VisualizationEditorComponent;
  
  currentVisualizationUrl: string = '';
  examples: Example[] = [];
  currentExample: Example | null = null;

  constructor() { }

  ngOnInit(): void {
    this.initializeExamples();
  }

  onVisualizationGenerated(url: string): void {
    this.currentVisualizationUrl = url;
  }

  loadExample(example: Example): void {
    this.currentExample = example;
    if (this.editor) {
      this.editor.selectedLanguage = example.language;
      this.editor.code = example.code;
    }
  }

  private initializeExamples(): void {
    this.examples = [
      {
        name: 'Python Bar Chart (Matplotlib)',
        language: 'python',
        code: `import matplotlib.pyplot as plt
import numpy as np

# Data
categories = ['Category A', 'Category B', 'Category C', 'Category D']
values = [15, 34, 23, 48]

# Create bar chart
plt.figure(figsize=(10, 6))
plt.bar(categories, values, color='skyblue')
plt.xlabel('Categories')
plt.ylabel('Values')
plt.title('Simple Bar Chart')
plt.grid(axis='y', linestyle='--', alpha=0.7)

# Save the figure
plt.savefig('output.png')`,
        description: 'A simple static bar chart using Matplotlib in Python.'
      },
      {
        name: 'Python Interactive Plot (Plotly)',
        language: 'python',
        code: `import plotly.express as px
import pandas as pd
import numpy as np

# Create sample data
np.random.seed(42)
df = pd.DataFrame({
    'x': np.random.normal(0, 1, 100),
    'y': np.random.normal(0, 1, 100),
    'size': np.random.uniform(5, 15, 100),
    'category': np.random.choice(['A', 'B', 'C', 'D'], 100)
})

# Create interactive scatter plot
fig = px.scatter(df, x='x', y='y', size='size', color='category',
                hover_name='category', title='Interactive Scatter Plot')

# Update layout
fig.update_layout(
    width=800,
    height=600,
    template='plotly_white'
)

# Save as HTML
fig.write_html('output.html')`,
        description: 'An interactive scatter plot using Plotly in Python.'
      },
      {
        name: 'R Bar Chart (ggplot2)',
        language: 'r',
        code: `library(ggplot2)

# Create data frame
data <- data.frame(
  category = c("A", "B", "C", "D"),
  value = c(15, 34, 23, 48)
)

# Create bar chart
p <- ggplot(data, aes(x = category, y = value)) +
  geom_bar(stat = "identity", fill = "steelblue") +
  labs(title = "Simple Bar Chart",
       x = "Categories",
       y = "Values") +
  theme_minimal()

# Save the plot
ggsave("output.png", p, width = 8, height = 6)`,
        description: 'A simple static bar chart using ggplot2 in R.'
      },
      {
        name: 'R Interactive Plot (plotly)',
        language: 'r',
        code: `library(plotly)
library(ggplot2)

# Create sample data
set.seed(42)
df <- data.frame(
  x = rnorm(100),
  y = rnorm(100),
  size = runif(100, 5, 15),
  category = sample(LETTERS[1:4], 100, replace = TRUE)
)

# Create ggplot
p <- ggplot(df, aes(x = x, y = y, size = size, color = category)) +
  geom_point(alpha = 0.7) +
  labs(title = "Interactive Scatter Plot") +
  theme_minimal()

# Convert to plotly
interactive_plot <- ggplotly(p)

# Save as HTML
htmlwidgets::saveWidget(interactive_plot, "output.html")`,
        description: 'An interactive scatter plot using plotly in R.'
      }
    ];
  }
}
