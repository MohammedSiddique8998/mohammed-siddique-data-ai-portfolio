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

Status: published as a cleaned portfolio repository at `https://github.com/MohammedSiddique8998/bio-inspired-multi-armed-bandit-rl`.

Portfolio-ready structure:

```text
bio-inspired-multi-armed-bandit-rl/
  README.md
  requirements.txt
  src/
    agents.py
    bandits.py
    experiment.py
    plotting.py
    summarise_results.py
  notebooks/
    README.md
  reports/
    experiment_card.md
  results/
    summary_metrics.csv
    *_average_reward.svg
    *_optimal_action_rate.svg
```

README content:
- Problem statement: compare exploration-exploitation strategies.
- Methods: random, greedy, epsilon-greedy and UCB simulation.
- Results: average reward, optimal action trends and final-window summary metrics.
- Limitations: simulated environment, simplified reward distributions.
- Future improvements: Thompson sampling, contextual bandits, dashboard.

### 3. Data Mining and Visualisation Clustering

Suggested repository name: `data-mining-text-clustering`

Status: published as a cleaned portfolio repository at `https://github.com/MohammedSiddique8998/data-mining-text-clustering`.

Portfolio-ready structure:

```text
data-mining-text-clustering/
  README.md
  requirements.txt
  data/
    sample_sentences.tsv
  notebooks/
    README.md
  src/
    preprocessing.py
    tfidf.py
    clustering.py
    visualisation.py
    experiment.py
    sentence_transformer_optional.py
  reports/
    experiment_card.md
  results/
    metrics.json
    cluster_assignments.csv
    cluster_terms.csv
    silhouette_scores.svg
    pca_cluster_map.svg
```

README content:
- Problem statement: discover structure in unlabelled sentence data.
- Dataset: safe synthetic demo corpus plus instructions for permitted TSV data.
- Methods: preprocessing, TF-IDF, K-Means, silhouette analysis and PCA visualisation.
- Results: selected K=4, silhouette score 0.2111, balanced cluster sizes and top-term interpretation.
- Limitations: synthetic demo data, lexical TF-IDF baseline and moderate silhouette score.
- Future improvements: sentence-transformer embeddings, t-SNE/UMAP, cluster stability checks and dashboard.

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
