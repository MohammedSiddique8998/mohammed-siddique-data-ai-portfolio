# Project Repository Polishing Plan

This plan keeps university coursework, answer sheets, rubrics, private datasets and raw assignment files out of public GitHub repositories. Each project should be converted into an independent learning/portfolio project before publication.

## Source Folders Reviewed

- `C:\Users\Siddique\Desktop\COMP534 - Applied AI`
- `C:\Users\Siddique\Desktop\COMP532 - Bioinspired Learning and Machine learning`
- `C:\Users\Siddique\Desktop\COMP527 - Data Mining and Visualization`
- `C:\Users\Siddique\Documents\Data Mining`

The reviewed folders include notebooks, reports, zips, rubrics, course content and assessment submissions. Those raw folders should not be published directly.

## Public Repo Safety Rules

- Do not upload university briefs, rubrics, answer sheets, lecturer materials, private reports or zipped submissions.
- Do not upload raw notebooks until they are cleaned, renamed and stripped of outputs that reveal private course material.
- Use public datasets or provide dataset download instructions instead of shipping restricted data.
- Rewrite problem statements in original language and frame projects as independent learning projects.
- Keep reproducible code, short README documentation, selected plots and requirements only.

## Priority Repositories

### 1. Applied AI Image Classification

Suggested repository name: `applied-ai-image-classification`

Status: published as a cleaned portfolio repository at `https://github.com/MohammedSiddique8998/applied-ai-image-classification`.

Portfolio-ready structure:

```text
applied-ai-image-classification/
  .gitattributes
  .gitignore
  README.md
  requirements.txt
  src/
    config.py
    data.py
    models.py
    train.py
    evaluate.py
  notebooks/
    README.md
  reports/
    consistency_audit.md
    model_card.md
  results/
    README.md
```

README content:
- Problem statement: classify chest X-ray images into Normal, Opacity and Pneumonia.
- Dataset: summarise class counts and split without publishing restricted data.
- Methods: preprocessing, augmentation, custom CNN baseline, DenseNet121 transfer learning and evaluation.
- Results: explain that metrics and plots must be regenerated locally because dataset/checkpoints are not published.
- Limitations: educational/non-clinical use, no external validation and opacity/normal confusion risk.
- Future improvements: external validation, explainability, calibration and deployment demo.

### 2. Bio-Inspired Learning / Multi-Armed Bandit

Suggested repository name: `reinforcement-learning-bandit-simulation`

Portfolio-ready structure:

```text
reinforcement-learning-bandit-simulation/
  README.md
  requirements.txt
  notebooks/
    bandit_simulation.ipynb
  src/
    bandits.py
    policies.py
    run_experiment.py
  screenshots/
    reward_comparison.png
    optimal_action_rate.png
```

README content:
- Problem statement: compare exploration-exploitation strategies.
- Methods: epsilon-greedy and UCB simulation.
- Results: average reward and optimal action trends.
- Limitations: simulated environment, simplified reward distributions.
- Future improvements: Thompson sampling, contextual bandits, dashboard.

### 3. Data Mining and Visualisation Clustering

Suggested repository name: `data-mining-clustering-visualisation`

Portfolio-ready structure:

```text
data-mining-clustering-visualisation/
  README.md
  requirements.txt
  notebooks/
    clustering_workflow.ipynb
  src/
    preprocess.py
    cluster.py
    evaluate.py
  screenshots/
    silhouette_plot.png
    cluster_visualisation.png
```

README content:
- Problem statement: discover structure in unlabeled data.
- Dataset: public or permitted data source and feature summary.
- Methods: preprocessing, scaling, K-Means or hierarchical clustering, silhouette analysis.
- Results: cluster metrics and visualisations.
- Limitations: sensitivity to scaling and number of clusters.
- Future improvements: PCA/UMAP, cluster profiling, dashboard.

### 4. Energy Demand Forecasting

Suggested repository name: `energy-demand-forecasting`

Portfolio-ready structure:

```text
energy-demand-forecasting/
  README.md
  requirements.txt
  notebooks/
    energy_forecasting.ipynb
  src/
    features.py
    train.py
    evaluate.py
  screenshots/
    actual_vs_predicted.png
    error_metrics.png
```

README content:
- Problem statement: forecast short-term energy demand.
- Dataset: public electricity/weather dataset link.
- Methods: time features, moving averages, regression baseline, MAE/RMSE.
- Results: actual vs predicted plot and error table.
- Limitations: seasonality, weather data quality, baseline model scope.
- Future improvements: ARIMA, XGBoost, LSTM, deployment dashboard.

### 5. Mental Health Risk Prediction

Suggested repository name: `mental-health-risk-prediction`

Portfolio-ready structure:

```text
mental-health-risk-prediction/
  README.md
  requirements.txt
  notebooks/
    mental_health_risk_prediction.ipynb
  src/
    preprocess.py
    train.py
    evaluate.py
  screenshots/
    confusion_matrix.png
    feature_summary.png
```

README content:
- Problem statement: classify mental health risk from survey-style data.
- Dataset: public dataset source and ethics note.
- Methods: cleaning, EDA, feature engineering, Logistic Regression, Random Forest, SVM.
- Results: accuracy, confusion matrix, model comparison.
- Limitations: self-reported data, fairness, interpretability.
- Future improvements: explainability, calibration, bias checks.

## Next Action Checklist

1. Pick one project.
2. Copy only safe code into a new clean folder.
3. Remove assignment instructions, rubrics, private outputs and course files.
4. Replace private datasets with public dataset links or instructions.
5. Clean notebook outputs and add a short narrative.
6. Add `README.md`, `requirements.txt`, `screenshots/` and `src/`.
7. Review for academic integrity before creating the public GitHub repo.
