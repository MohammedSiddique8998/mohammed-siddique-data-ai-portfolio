# Mohammed Siddique Data Science and AI Portfolio

Static interactive portfolio for Data Science, AI Engineering, Data Analytics, Business Analysis and AI Consulting opportunities.

This project is intentionally built with plain HTML, CSS and JavaScript. It does not use React, Next.js, Tailwind CSS, Framer Motion, GSAP, Three.js or React Three Fiber. The 3D-style motion is created with native CSS transforms, a WebGL shader canvas, a Canvas 2D data-network background and vanilla JavaScript interactions.

## Tech Stack

- HTML5
- CSS3 with responsive media queries, theme variables, glass panels and motion effects
- Vanilla JavaScript
- Native Canvas 2D
- Native WebGL
- Static assets: PDF and DOCX CV files
- Optional Node scripts for local serving and build validation

## Project Structure

```text
portfolio-site/
  assets/
    Mohammed_Siddique_Master_CV.docx
    Mohammed_Siddique_Master_CV.pdf
  scripts/
    build.mjs
    server.mjs
  app.js
  index.html
  package.json
  README.md
  styles.css
```

## Features

- Responsive single-page portfolio with sticky navigation
- Three visual themes controlled by one header button
- Animated loading screen, scroll reveals, counters, hover states and 3D-style refresh transition
- Brand-name click refresh gesture with motion replay
- Filterable project cards with case-study modals
- PDF and DOCX CV download links
- Contact section with email, phone, LinkedIn and FormSubmit form
- Floating "Hi" enquiry widget that opens a pre-filled email draft
- Footer with made-by credit, privacy, terms and conditions modals

## Contact Delivery

The main contact form is wired to FormSubmit:

```text
https://formsubmit.co/siddique.infra08091998@gmail.com
```

FormSubmit usually requires a one-time activation email after the first live form submission. Open the activation email in Gmail and confirm it once. After that, future main contact form messages should be delivered to the inbox.

The floating "Hi" widget uses a `mailto:` fallback, so it opens a visitor's email client with a pre-filled message to:

```text
siddique.infra08091998@gmail.com
```

No Gmail passwords, SMTP credentials, OAuth secrets or private API keys are stored in this static site.

## How to Run Locally

No package installation is required because the site has no dependencies.

With Python:

```bash
cd portfolio-site
python -m http.server 4173
```

With Node:

```bash
cd portfolio-site
npm run dev
```

Open:

```text
http://localhost:4173
```

## Build and Validation

The build script checks required files, key sections, CV links, old removed wording, responsive breakpoints and motion/contact hooks. It then copies the deployable static site into `dist/`.

```bash
cd portfolio-site
npm run build
```

In environments where `npm` is not available, run the script directly with Node:

```bash
node scripts/build.mjs
```

## Deployment

### GitHub Pages

1. Push the project to GitHub.
2. In repository settings, open **Pages**.
3. Set source to **Deploy from a branch**.
4. Select the `main` branch and `/root`.
5. Save and wait for the Pages URL to appear.

The site can run as static HTML without a build step.

### Vercel

1. Import the GitHub repository.
2. Keep the project root as the repository root.
3. Leave install and build commands blank for static hosting, or use `npm run build` and publish `dist`.

### Netlify

1. Connect the GitHub repository or drag the project folder into Netlify Drop.
2. Leave the build command blank for static hosting, or use `npm run build`.
3. Use the repository root or `dist` as the publish directory depending on the chosen setup.

## Future Improvements

- Add public GitHub repositories once project code is ready to share.
- Add live demos only when the projects have deployed, working demos.
- Add dedicated project case-study pages with notebooks, screenshots or dashboard exports.
- Convert to Next.js, Tailwind CSS, Framer Motion and Three.js only if a full React rebuild is planned.
- Add a professional headshot or custom generated visual asset if a more personal visual identity is desired.
