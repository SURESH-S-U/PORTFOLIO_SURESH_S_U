# Portfolio Website

Welcome to my personal portfolio! This project showcases my skills, projects, and experiences in full-stack development and machine learning.

## Features

- **Particle Background:** A dynamic and interactive particle animation using `@tsparticles/react`.
- **Modern UI/UX:** Clean and responsive design for a seamless user experience.
- **Project Showcase:** Displays my key projects, including the ML face detection project and full-stack applications.
- **Contact Section:** Get in touch via social links or email.

## Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Particle Animation:** `@tsparticles/react`
- **Backend (Future Integration):** FastAPI, MongoDB

## Installation

To run this portfolio locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to the project folder
cd portfolio

# Install dependencies
npm install

# Start the development server
npm start
```

## Particle Configuration

The particle animation is configured in `src/components/ParticlesBackground.js` using the following settings:

```javascript
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: { color: "#000" },
                particles: {
                    number: { value: 100 },
                    shape: { type: "circle" },
                    move: { enable: true, speed: 2 },
                    color: { value: "#ffffff" },
                },
                interactivity: {
                    events: { onHover: { enable: true, mode: "repulse" } },
                },
            }}
        />
    );
};

export default ParticlesBackground;
```

## Deployment

To deploy your portfolio using GitHub Pages or Vercel:

```bash
# Build the project
npm run build

# Deploy using Vercel
vercel deploy
```

