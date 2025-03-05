# Integration Insurance Platform

A modern, responsive insurance platform built with Next.js, featuring a bilingual interface (Arabic/English) and comprehensive insurance services information.

## Features

- Fully Responsive Design
- Bilingual Support (Arabic/English)
- Modern UI/UX
- Fast Performance
- SEO Optimized
- Modular Component Architecture

## Project Structure

```
integration/
├── public/
│   ├── assets/
│   │   ├── insurance-imgs/   # Insurance-related images
│   │   ├── logos/           # Company and partner logos
│   │   ├── new/            # New assets
│   │   └── trust/          # Trust badges and certificates
├── src/
│   ├── app/                # Next.js 13+ App Router
│   │   ├── (home)/        # Home page
│   │   ├── about-us/      # About Us page
│   │   ├── contact-us/    # Contact page
│   │   └── our-services/  # Services page
│   ├── components/        # Reusable components
│   │   ├── Hero/         # Hero section
│   │   ├── InsuranceTypes/ # Insurance type components
│   │   ├── about/        # About section components
│   │   ├── faq/          # FAQ components
│   │   ├── footer/       # Footer component
│   │   ├── header/       # Header component
│   │   └── services/     # Service-related components
│   ├── constants/        # Constants and configurations
│   └── styles/          # Global styles and CSS modules
```

## Key Components

### 1. Layout Components
- `header/`: Main navigation and site header
- `footer/`: Site footer with links and contact info
- `nav/`: Navigation menu component

### 2. Home Page Components
- `Hero/`: Hero section with main CTA
- `Services/`: Insurance services showcase
- `Statistics/`: Company statistics and achievements
- `FAQ/`: Frequently asked questions (Arabic/English)
- `Partners/`: Partner companies showcase
- `ImageSlider/`: Image carousel component

### 3. Feature Components
- `InsuranceTypes/`: Different insurance product types
- `contact/`: Contact form and information
- `about/`: Company information and history

## Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/integration.git
cd integration
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application

## Technology Stack

- **Framework**: Next.js 13+
- **Styling**: CSS Modules
- **Icons**: React Icons
- **Fonts**: Cairo (Arabic), Inter (English)
- **Deployment**: Vercel

## Responsive Design

The platform is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## Internationalization

The platform supports both Arabic and English languages with:
- RTL/LTR layout switching
- Localized content
- Language-specific fonts
- Culturally appropriate UI elements

## Configuration

Key configuration files are located in `src/constants/`:
- Navigation menus
- Service types
- Contact information
- Social media links

## Component Usage

### Hero Component
```jsx
import Hero from "@/components/Hero/Hero";

// Usage
<Hero />
```

### FAQ Component
```jsx
import FAQ from "@/components/faq/FAQ";

// Usage
<FAQ />
```

### Services Component
```jsx
import Services from "@/components/services/Services";

// Usage
<Services />
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Support

For support, email support@integration.com or open an issue in the repository.
