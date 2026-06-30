import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'ai-resume-builder',
    name: 'AI Resume Builder',
    tagline: 'MERN Stack AI-Powered Career Platform',
    shortDescription: 'A full-stack web application designed to help job seekers create, edit, and optimize resumes in real-time using Gemini AI.',
    longDescription: 'The AI Resume Builder is a modern SaaS platform designed to streamline resume creation. It integrates secure email/password authentication, a responsive drag-and-drop resume editor, a real-time responsive preview, and AI integrations that analyze and rewrite resume sections for ATS optimization. Profile images are managed through ImageKit, which handles automated background removal and resizing. The entire app is containerized and deployed to a VPS for production use.',
    problemStatement: 'Job seekers struggle to write highly tailored, ATS-compliant descriptions and often spend hours fighting formatting issues in standard text editors.',
    solution: 'A MERN-stack application that provides real-time preview editing alongside an AI assistant powered by Gemini. The AI automatically analyzes, formats, and rewrites bullet points to highlight achievements and keywords.',
    features: [
      'Secure User Authentication (Sign-up/Login) via JWT.',
      'Real-time Resume Builder interface with instant interactive markdown preview.',
      'AI-based resume optimizer powered by Gemini API for professional descriptions.',
      'Direct profile image uploading with cloud-based background removal using ImageKit.',
      'Shareable live resume links allowing users to host their CVs online.',
      'Multiple professionally styled layout templates responsive on all viewports.',
      'Single-click exports and edits with secure session state management.'
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Gemini AI API', 'ImageKit', 'JWT', 'Tailwind CSS', 'Vite'],
    contribution: 'End-to-end full-stack development. I designed the responsive React UI with Tailwind CSS, built the Express.js Rest API endpoints, integrated MongoDB for persistent document storage, implemented JWT secure authentication, integrated Gemini AI for descriptions, and handled deployment on a VPS.',
    challengesFaced: 'A major challenge was synchronizing the real-time resume preview with user inputs in the editor form. Frequent keystrokes in the forms triggered full-page re-renders, creating input lag. I solved this by isolating the editor form states and using debounced React hooks to update the main preview canvas asynchronously, resulting in a zero-lag interactive experience.',
    outcome: 'Created a highly responsive web tool that allows developers and job hunters to compile a professional, ATS-optimized resume in under 10 minutes. The system operates with sub-second AI response times and reliable session management.',
    futureImprovements: 'Integrate direct PDF exports using serverless puppeteer renderers, implement dynamic ATS compatibility scoring, and create multi-user organization boards.',
    githubLink: 'https://github.com/imSaurav06', // Fallback link
    iconName: 'Sparkles',
    architecture: {
      nodes: [
        { name: 'Client App', details: 'React.js SPA styled with Tailwind CSS, utilizing React Hook Form.' },
        { name: 'API Server', details: 'Node.js & Express API serving REST endpoints and managing routes.' },
        { name: 'Auth Shield', details: 'JWT authentication verifying user tokens on protected endpoints.' },
        { name: 'Service Layer', details: 'Integrations with Gemini AI API (optimization) and ImageKit (storage & background removal).' },
        { name: 'Data Center', details: 'MongoDB database storing user profile states and resume JSON schemas.' }
      ],
      description: 'The Client triggers actions which pass through the API Server. Authenticated requests are routed to the Service Layer for AI adjustments and image uploads, before saving the resulting JSON schema to the MongoDB database.'
    },
    techStackBreakdown: {
      frontend: ['React 18', 'Tailwind CSS v4', 'Framer Motion', 'React Hook Form'],
      backend: ['Node.js', 'Express.js', 'REST APIs'],
      database: ['MongoDB (Mongoose ORM)'],
      authentication: ['JWT (JSON Web Tokens)', 'BCrypt Password Hashing'],
      deployment: ['VPS Hosting', 'Nginx Reverse Proxy', 'Docker Containerization'],
      thirdPartyServices: ['Gemini AI API', 'ImageKit Cloud Storage']
    },
    interviewPrep: {
      whyBuilt: 'I wanted to build a SaaS-like product that integrated complex state management, AI APIs, and real-world assets pipelines. This project showcases my capability to link a high-fidelity frontend with a scalable backend.',
      biggestChallenge: 'Optimizing the real-time preview renderer and secure file storage pipelines. I set up custom middleware in Express to forward image payloads to ImageKit, securing third-party api keys from client-side vulnerability.',
      whatLearned: 'I mastered JWT token rotation, how to design structured prompts to retrieve predictable JSON schema outputs from Gemini AI, and managing multi-container production environments.',
      futureImprovements: 'Create collaborative editing rooms where mentors can leave annotations on resumes in real-time, and expand available visual templates.'
    },
    galleryImages: [
      { title: 'Dashboard View', description: 'Overview of all resumes built by the user, with editing and sharing controls.', type: 'ui' },
      { title: 'AI Assistant Panel', description: 'Interactive AI panel that reviews resume bullet points and offers ATS suggestions.', type: 'code' },
      { title: 'Real-time Canvas Editor', description: 'Split-screen interface displaying form inputs on the left and a live-updating CV on the right.', type: 'ui' }
    ]
  },
  {
    id: 'package-delivery-app',
    name: 'Package Delivery Application',
    tagline: 'Multi-Role Flutter Mobile Platform',
    shortDescription: 'A cross-platform mobile application built in Flutter and Firebase, featuring real-time tracking, live payments, and multi-role workflows.',
    longDescription: 'The Package Delivery Application is a cross-platform mobile utility built using Flutter and Dart. It features three distinct user flows: Admin (for routing, pricing, and order dispatching), Delivery Driver (for pickup, status logs, and route mapping), and Customer (for booking deliveries, completing payments, and tracking locations). The backend relies on Firebase (Auth, Firestore, Cloud Functions, Storage, FCM), and integrates secure transaction processing via Stripe and Razorpay integrations.',
    problemStatement: 'Traditional courier logistics lack a unified, real-time channel linking admins, drivers, and clients, resulting in delivery delays and fragmented payment collections.',
    solution: 'A cross-platform Flutter application backed by Firestore real-time listeners. Drivers report location logs which update instantly on the customer map, while Firebase Cloud Functions handle order triggers and payment notifications.',
    features: [
      'Multi-Role access controls (User, Delivery Driver, Admin dashboard).',
      'Real-time package tracking using geolocation mapping.',
      'Online payment processing via Razorpay and Stripe gateways.',
      'End-to-end order lifecycle management from dispatch to delivery verification.',
      'FCM (Firebase Cloud Messaging) instant push notifications for status updates.',
      'Role-based dashboard statistics for admins.',
      'Camera integration for packages validation and profile image uploads.'
    ],
    technologies: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Firebase Storage', 'Cloud Functions', 'FCM', 'Razorpay', 'Stripe'],
    contribution: 'End-to-end Flutter development. I designed the responsive cross-platform layouts, configured Firestore collections, integrated Firebase Auth for secure sign-ups, set up background location services, created payment SDK integrations, and deployed serverless Cloud Functions.',
    challengesFaced: 'Synchronizing real-time package coordinates in the background. Mobile operating systems frequently suspend background services to conserve power. I resolved this by integrating native background location plugins, writing custom service hooks, and optimization of coordinates uploads to trigger only when the driver moves more than 10 meters.',
    outcome: 'A production-ready mobile solution featuring low-latency real-time updates (under 500ms) and secure, error-tolerant transaction checkpoints.',
    futureImprovements: 'Incorporate routing optimization algorithms (e.g. Google Maps Roads API) and implement direct in-app chat using Firestore websocket connections.',
    githubLink: 'https://github.com/imSaurav06', // Fallback link
    iconName: 'Truck',
    architecture: {
      nodes: [
        { name: 'Flutter Mobile App', details: 'Single codebase compiled for iOS & Android, featuring provider-based state management.' },
        { name: 'Firebase Auth', details: 'Handles authentication and enforces role checks (User, Admin, Driver).' },
        { name: 'Cloud Firestore', details: 'Real-time database storing coordinates, orders, and payment records.' },
        { name: 'Cloud Functions', details: 'Serverless backend triggers for processing payments and routing logistics.' },
        { name: 'FCM & Payments', details: 'Push notifications via FCM and billing via Razorpay/Stripe integrations.' }
      ],
      description: 'The Flutter mobile app acts as the front layer, directly connecting to Firebase Auth. Real-time updates occur via active subscriptions to Cloud Firestore. Payment flows and system events are managed by Cloud Functions communicating with Stripe/Razorpay.'
    },
    techStackBreakdown: {
      frontend: ['Flutter SDK', 'Dart', 'Google Maps Native SDK'],
      backend: ['Node.js (Firebase Cloud Functions)'],
      database: ['Cloud Firestore (NoSQL)'],
      authentication: ['Firebase Authentication (Email/Password, Google OAuth)'],
      deployment: ['Firebase Hosting', 'Google Play Store / Apple App Store staging'],
      thirdPartyServices: ['Razorpay Payment SDK', 'Stripe API', 'Firebase Cloud Messaging (FCM)', 'Google Geolocation API']
    },
    interviewPrep: {
      whyBuilt: 'This app was built to demonstrate my competency in cross-platform mobile development and cloud-native architecture. Delivering a seamless multi-role experience is key for real-world business applications.',
      biggestChallenge: 'Handling secure payments and webhooks. I resolved this by moving payment verification to Cloud Functions, ensuring client apps cannot forge success tokens.',
      whatLearned: 'I learned details of Firestore data modeling (denormalization vs. subcollections) and managing real-time subscriptions without causing memory leaks in mobile runtimes.',
      futureImprovements: 'Incorporate offline-first capabilities where drivers can log deliveries offline, syncing to Firestore once connections restore.'
    },
    galleryImages: [
      { title: 'User Booking Screen', description: 'Simplified form for inputting pick-up/drop-off details and choosing package classes.', type: 'mobile' },
      { title: 'Real-time Tracking Map', description: 'Interactive map displaying delivery driver location and route progress.', type: 'mobile' },
      { title: 'Admin Control Hub', description: 'Comprehensive dashboard showing active orders, driver assignments, and payment summaries.', type: 'ui' }
    ]
  },
  {
    id: 'potato-plant-disease-detection',
    name: 'Crop Disease Detection System',
    tagline: 'Deep Learning Computer Vision API & Web App',
    shortDescription: 'An agricultural AI solution using TensorFlow and Convolutional Neural Networks (CNN) to diagnose potato leaf diseases in real-time.',
    longDescription: 'The Potato Plant Disease Detection System is an end-to-end computer vision application designed to aid farmers in identifying crop diseases (Early Blight, Late Blight, or Healthy leaves). The system features a Deep Learning CNN model trained on crop leaf datasets, integrated into a Python Flask/FastAPI backend, with a highly interactive web interface. Users upload leaf photos and receive classification predictions, confidence scores, and disease-wise treatment remedies.',
    problemStatement: 'Farmers suffer significant crop yield losses due to delays in detecting bacterial and fungal diseases, which traditionally require slow and costly manual inspection.',
    solution: 'An instant web-based diagnostic utility. The user uploads a photo of a diseased leaf, OpenCV preprocesses the image, and a custom-trained CNN model classifies the disease within 100ms, returning organic and chemical remedies.',
    features: [
      'Real-time leaf image upload and prediction capabilities.',
      'High-accuracy Deep Learning classification using a custom CNN model.',
      'Visual confidence scoring displayed as interactive meter charts.',
      'Comprehensive remedy suggestions for diagnosed crop illnesses.',
      'Automated OpenCV preprocessing pipeline (resizing, scaling, noise removal).',
      'Mobile-responsive web interface accessible directly in the field.'
    ],
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Flask', 'FastAPI', 'HTML', 'CSS', 'JavaScript', 'Jupyter Notebook'],
    contribution: 'End-to-end development. I collected and prepared the leaf dataset, trained the CNN model using TensorFlow/Keras, built the Flask/FastAPI backend API endpoints, designed the responsive web interface, and integrated the image processing pipelines with OpenCV.',
    challengesFaced: 'Optimizing the Deep Learning model to run on lightweight CPU servers without lag or high memory bills. The initial model was over 120MB, causing timeouts. I solved this by implementing model quantization, converting the network to TensorFlow Lite formats, and optimizing OpenCV resize pipelines to reduce server loads.',
    outcome: 'Successfully achieved over 95% validation accuracy in classifying leaf diseases, resulting in a lightweight prediction service that operates in under 150ms on standard cloud instances.',
    futureImprovements: 'Expand training sets to encompass other crops (e.g. tomato, maize) and compile as an offline Flutter mobile app utilizing on-device ML runtimes.',
    githubLink: 'https://github.com/imSaurav06', // Fallback link
    iconName: 'Leaf',
    architecture: {
      nodes: [
        { name: 'Responsive Frontend', details: 'Tailwind CSS styled interface allowing drag-and-drop file uploads.' },
        { name: 'Flask / FastAPI Server', details: 'Web gateway exposing prediction endpoints and serving client files.' },
        { name: 'OpenCV Preprocessor', details: 'Preprocesses incoming images (224x224 scaling, color normalization, noise reduction).' },
        { name: 'TensorFlow Engine', details: 'CNN model loader executing inference passes on processed arrays.' },
        { name: 'Remedy Knowledge Base', details: 'Database / JSON lookup returning disease remedies and chemical details.' }
      ],
      description: 'The user uploads a leaf image which the web frontend posts to the API Server. OpenCV scales the image, passing the tensor to the TensorFlow Engine. The predicted class fetches remedial actions, and the client displays the report.'
    },
    techStackBreakdown: {
      frontend: ['HTML5', 'Vanilla JavaScript (ES6+)', 'Tailwind CSS (UI styling)'],
      backend: ['Python', 'Flask', 'FastAPI'],
      database: ['Static JSON data (for remedies)', 'Local Model Weights (.h5/TFLite)'],
      authentication: ['None (public utility)'],
      deployment: ['VPS Deployment', 'Dockerized Python Container'],
      thirdPartyServices: ['TensorFlow/Keras library', 'OpenCV Image Engine']
    },
    interviewPrep: {
      whyBuilt: 'I built this to merge computer vision research with real-world utility. Agriculture benefits immensely from smart diagnostics, and this proves ML models can run efficiently on production backends.',
      biggestChallenge: 'Combatting model overfitting during training. I resolved this by applying data augmentation techniques (random rotations, horizontal flips, zooming) to the leaf dataset in Jupyter Notebooks.',
      whatLearned: 'I gained deep insights into convolutional layers, pooling operations, activation functions, and linking scientific Python stacks with web servers.',
      futureImprovements: 'Incorporate geographical mapping to track disease spreads across regional maps, alerting nearby farms.'
    },
    galleryImages: [
      { title: 'Web Upload Panel', description: 'Minimalist drag-and-drop dashboard for uploading crop leaf photos.', type: 'ui' },
      { title: 'Diagnosis Report Page', description: 'Results card displaying the classification, confidence metrics, and organic remedies.', type: 'ui' },
      { title: 'Training Validation Charts', description: 'Accuracy and loss curves demonstrating model convergence during training iterations.', type: 'code' }
    ]
  }
];
