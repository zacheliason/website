---
title: Zach should be in red and light
format:
  html:
    toc: true
    css: styles.css
---

# Introduction

This is a sample Quarto document that showcases some of its capabilities, including R code integration and visualizations.

## Section 1
## Section 2
## Section 3
## Section 4

Here is some content for section 1.

```{r}
library(ggplot2)

# Generate random data
data <- data.frame(
  x = rnorm(100),
  y = rnorm(100)
)

# Create a scatter plot
ggplot(data, aes(x, y)) +
  geom_point() +
  labs(title = "Scatter Plot", x = "X", y = "Y")
```
# Step 2

## step 3
### step 4
#### step 5
##### step 6
###### step 7
