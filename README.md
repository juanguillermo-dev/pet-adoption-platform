# Pet Adoption Platform

A React web application connecting animal shelters with potential adopters. Users can browse available pets, explore partner foundations, request adoptions, and manage their profiles — all from a multilingual interface.

## Overview

The frontend was built with React and JavaScript, following a component-based architecture. It supports both Spanish and English through i18n internationalization, includes a service worker for offline capabilities, and was integrated into a CI/CD pipeline using Jenkins and SonarQube for code quality analysis.

## Tech Stack

| | |
|---|---|
| Framework | React (Create React App) |
| Language | JavaScript (ES6+) |
| Styling | CSS |
| i18n | i18next |
| Testing | Jest |
| CI/CD | Jenkins, SonarQube |

## Project Structure

```
pet-adoption-platform/
└── Proyecto/ISIS3710_202420_S1_E3_Front/
    ├── public/
    │   ├── index.html
    │   ├── imagenes/               # Static images
    │   └── manifest.json
    ├── src/
    │   ├── components/             # UI components
    │   │   ├── HomePage.js
    │   │   ├── NavBar.js
    │   │   ├── PetList.js          # Browse available pets
    │   │   ├── PetDetails.js       # Individual pet page
    │   │   ├── AddPet.js           # Add a new pet listing
    │   │   ├── AdoptionForm.js     # Adoption request form
    │   │   ├── FundList.js         # List of partner foundations
    │   │   ├── FundDetail.js       # Foundation profile
    │   │   ├── FundacionModal.js
    │   │   ├── ProdList.js         # Store/product listings
    │   │   ├── ProdDetail.js
    │   │   ├── UserProfile.js      # User account page
    │   │   ├── LoginModal.js
    │   │   ├── RegisterModal.js
    │   │   ├── gruposFamiliares.js # Family group management
    │   │   ├── hogarPaso.js        # Foster home registration
    │   │   └── verificacion.js     # User verification flow
    │   ├── locales/
    │   │   ├── en.js               # English translations
    │   │   └── es.js               # Spanish translations
    │   ├── App.js
    │   └── i18n.js                 # i18next configuration
    ├── Jenkinsfile                 # CI/CD pipeline definition
    └── sonar-project.properties   # SonarQube config
```

## Features

- **Pet browsing** — view all available animals with details and images
- **Adoption workflow** — submit and manage adoption requests
- **Foundation directory** — explore partner shelters and rescues
- **Foster home registration** — register as a temporary foster family
- **Product store** — browse pet-related products from foundations
- **User accounts** — register, log in, and manage your profile
- **Multilingual** — full Spanish and English support via i18next
- **PWA-ready** — includes service worker for offline support

## Getting Started

```bash
cd Proyecto/ISIS3710_202420_S1_E3_Front
npm install
npm start
```

The app will run at `http://localhost:3000`.

## Running Tests

```bash
npm test
```

## Course

Web Development — Universidad de los Andes