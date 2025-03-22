<h1 align="center">Carbon Crunch</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.0.0-blue" alt="React">
  <img src="https://img.shields.io/badge/Three.js-0.160.0-green" alt="Three.js">
  <img src="https://img.shields.io/badge/GSAP-3.12.2-purple" alt="GSAP">
</p>

<p align="center">
  A modern web application for sustainability reporting and carbon footprint tracking with interactive 3D visualizations.
</p>


<h2>Overview</h2>

<p>
  Carbon Crunch helps businesses track, visualize, and report on their sustainability metrics with an intuitive, animated interface. The application features interactive 3D card visualizations of key ESG metrics and responsive design for all devices.
</p>

<h2>Dependencies</h2>

<p>Before running the application, install the following dependencies:</p>

<pre><code># Core dependencies
npm install react react-dom

# Routing
npm install react-router-dom

# 3D and Animation libraries
npm install three gsap

# UI utilities
npm install classnames
</code></pre>

<h2>Quick Start</h2>

<ol>
  <li>Clone the repository:
<pre><code>git clone (https://github.com/Fakiyat/CarbonCrunch-Webapp.git)
cd carbon-crunch</code></pre>
  </li>
  <li>Install dependencies:
<pre><code>npm install</code></pre>
  </li>
  <li>Start the development server:
<pre><code>npm run dev</code></pre>
  </li>
</ol>

<h2>Features</h2>

<ul>
  <li> <strong>Interactive 3D Card Animation</strong>: Visualize sustainability metrics with animated 3D cards</li>
  <li><strong>Responsive Design</strong>: Optimized for desktop, tablet, and mobile devices</li>
  <li> <strong>Animated Background</strong>: Dynamic particle network that responds to user movement</li>
  <li> <strong>Page Animations</strong>: Smooth transitions and scroll-triggered animations for enhanced UX</li>
  <li><strong>Real-time Data Visualization</strong>: Interactive charts and statistics displays</li>
</ul>

<h2>Project Structure</h2>

<pre><code>carbon-crunch/
carbon-crunch/
├── public/                  # Static files and assets
├── Preview/                 # Added a video for a sample look
├── src/                     # Source code
│   ├── Components/          # UI components organized by feature
│   │   ├── animation/       # Animation-related components
│   │   │   ├── animationBackground.css
│   │   │   ├── HeroBackground.css
│   │   │   ├── HeroBackground.jsx      # Hero section 3D background
│   │   │   └── threejsbackground.jsx   # Generic Three.js background
│   │   │
│   │   ├── bodycenter/      # Main content components
│   │   │   ├── Hero.css
│   │   │   └── Hero.jsx     # Main hero section component
│   │   │
│   │   ├── cards/           # Card visualization components
│   │   │   ├── cards.jsx    # Basic card component
│   │   │   ├── cardSection.css
│   │   │   ├── cardSection.jsx         # Regular card section
│   │   │   ├── ThreejscardSection.css  
│   │   │   └── ThreejscardSection.jsx  # 3D animated card section
│   │   │
│   │   └── navbar/          # Navigation components
│   │       ├── Navbar.css
│   │       └── Navbar.jsx   # Main navigation bar
│   │
│   ├── Images/              # Image assets
│   │
│   ├── Shared/              # Shared utilities and components
│   │
│   ├── App.css              # Main application styles
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   ├── eslint.config.js     # ESLint configuration
│   └── index.html           # HTML template
│
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── .gitignore               # Git ignore file
├── README.md                # Project documentation
└── vercel.json              # Vercel deployment configuration
</code></pre>

<h1>Features</h1>

<ul>
  <li> <strong>Interactive 3D Card Animation</strong>: Visualize sustainability metrics with animated 3D cards</li>
  <br/>
  <li> <strong>Responsive Design</strong>: Optimized for desktop, tablet, and mobile devices</li>
  <br/>
  <li> <strong>Animated Background</strong>: Dynamic particle network that responds to user movement</li>
  <br/>
  <li> <strong>Page Animations</strong>: Smooth transitions and scroll-triggered animations for enhanced UX</li>
</ul>

<h1>Some Preview</h1>

<h3>Logo</h3>

![Screenshot 2025-03-22 155407](https://github.com/user-attachments/assets/afa4fe92-fa17-428b-ade4-5e6a51f856f0)

<h3>Navbar</h3>

![Screenshot 2025-03-22 155650](https://github.com/user-attachments/assets/1ad78db2-cc8c-4905-a376-29e24424a0fd)

<h3>Buttons</h3>

![Screenshot 2025-03-22 155655](https://github.com/user-attachments/assets/2d8af5fa-8c2f-4b66-95ec-d78143c2535a)

<h3>Colored Bar</h3>

![Screenshot 2025-03-22 155702](https://github.com/user-attachments/assets/aedb1544-22c8-447a-bf63-143e1927f081)

<h3> Body Title</h3>

![Screenshot 2025-03-22 155716](https://github.com/user-attachments/assets/fde6f3bf-3d9a-4dfc-84ea-8fb425d52f32)

<h3>Card</h3>

![Screenshot 2025-03-22 155722](https://github.com/user-attachments/assets/42925688-d425-41f8-a0ab-a8bdb50849a2)


<h2>Browser Support</h2>

<p>The application works best on modern browsers that support WebGL:</p>
<ul>
  <li>Chrome (latest)</li>
  <li>Firefox (latest)</li>
  <li>Safari (latest)</li>
  <li>Edge (latest)</li>
</ul>

<h2>Performance Notes</h2>

<ul>
  <li>The 3D card animation uses ThreeJS and may be resource-intensive on older devices</li>
  <li>A responsive fallback is provided for devices that can't handle 3D graphics</li>
  <li>Animation intensity automatically scales based on device capabilities</li>
</ul>

<h2>Credits</h2>

<ul>
  <li><a href="https://threejs.org/">Three.js</a> for 3D rendering</li>
  <li><a href="https://greensock.com/gsap/">GSAP</a> for animations</li>
  <li><a href="https://fonts.google.com/specimen/Inter">Font Style</a>Different styles you can change it to whatever you like</li>
</ul>



<p>Contributions are welcome! Please feel free to submit a Pull Request.</p>

<h2>Contact</h2>

<p>For questions or feedback, please open an issue on this repository.</p>
