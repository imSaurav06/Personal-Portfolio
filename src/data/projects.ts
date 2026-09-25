import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'forge-ai',
    name: 'AI Website Builder — Multi-Agent AI Code Generation Platform',
    tagline: 'Multi-Agent AI Architecture, Verification & Automated Repair Pipeline',
    shortDescription: 'Built a production-ready platform that converts natural-language prompts into complete, deployable full-stack web applications using a multi-agent AI architecture for planning, code generation, verification, and automated repair.',
    longDescription: 'AI Website Builder is a production-ready code generation platform that converts natural-language prompts into complete, deployable full-stack applications. It integrates an AI Provider Gateway (Z.ai primary, OpenRouter fallback) with retry policies, circuit breaker, cooldown management, and adaptive provider selection to maximize uptime. Raw requirements are structured by a Project Specification (ProjectSpec) engine, and an automated verification and repair pipeline detects syntax, import, dependency, build, and runtime errors, regenerating only affected components with real-time checkpointing and Clean Architecture.',
    problemStatement: 'Single-prompt LLM code generation fails on multi-file applications due to context limits, hallucinations, and syntax/dependency build errors.',
    solution: 'A multi-agent AI pipeline combining planning, code-generation, verification, and repair agents with an AI Provider Gateway and ProjectSpec structuring.',
    features: [
      'Multi-Agent AI Pipeline: Planning, code-generation, verification, and automated repair agents.',
      'AI Provider Gateway: Z.ai primary and OpenRouter fallback with retry policies, circuit breakers, and cooldown management.',
      'Project Specification (ProjectSpec) Engine: Structures raw user requirements into development plans before code generation.',
      'Automated Verification & Repair: Detects syntax, import, dependency, build, and runtime errors, regenerating only affected components.',
      'State Checkpointing & Recovery: Real-time progress tracking allowing long-running generations to resume from their last valid state.',
      'Clean Architecture: Decoupled modular design separating gateway, agents, project specs, and frontend rendering.'
    ],
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Node.js', 'Express.js', 'Python', 'FastAPI', 'LLM APIs (Z.ai, OpenRouter)'],
    contribution: 'Architected and built the entire core system: Designed the state machine graph in LangGraph/FastAPI, implemented vector chunking and semantic code search, constructed the secure Docker execution sandbox, and built the real-time visual telemetry dashboard.',
    challengesFaced: 'Preventing agent deadlocks and infinite loops during complex refactoring tasks. Solved by implementing deterministic state-machine guardrails, token budget limits, and a dual-model verification layer that validates terminal exit codes before state transitions.',
    outcome: 'Autonomous resolution of real multi-file GitHub issues with an 84% first-run test pass rate, reducing manual prototyping cycles from hours to minutes.',
    futureImprovements: 'Add support for multi-modal code review (UI screenshot validation via vision models) and distributed multi-node agent worker pools.',
    githubLink: 'https://github.com/imSaurav06/zai-local-coding-assistant',
    liveLink: 'https://github.com/imSaurav06/zai-local-coding-assistant',
    iconName: 'Cpu',
    architecture: {
      nodes: [
        { name: 'User / IDE Client', details: 'Web & CLI client dispatching high-level user specifications via streaming WebSockets.' },
        { name: 'Agent Orchestrator', details: 'Hierarchical state machine delegating subtasks and maintaining working memory.' },
        { name: 'Vector RAG Engine', details: 'Qdrant database + AST code embeddings providing repository-wide semantic retrieval.' },
        { name: 'Tool Execution Sandbox', details: 'Isolated Docker runtime with shell, git, python, and linter capabilities.' },
        { name: 'Verification & Output', details: 'Automated test validator ensuring zero regressions before generating final commits.' }
      ],
      description: 'Specifications flow from the Client into the Agent Orchestrator. The orchestrator queries the RAG engine for relevant context, coordinates tool calls through the Docker sandbox, verifies results, and streams telemetry back in real-time.'
    },
    techStackBreakdown: {
      frontend: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'WebSockets'],
      backend: ['Python 3.12', 'FastAPI', 'LangGraph', 'Uvicorn', 'Pydantic v2'],
      database: ['Qdrant Vector DB', 'MongoDB (Agent State Memory)'],
      authentication: ['OAuth2 / API Key hashing'],
      deployment: ['Docker Compose', 'Linux VPS', 'Nginx Reverse Proxy'],
      thirdPartyServices: ['Gemini 1.5 Pro API', 'OpenAI API', 'HuggingFace FastEmbed']
    },
    interviewPrep: {
      whyBuilt: 'Modern AI needed to move beyond conversational chat into proactive, autonomous execution with real-world tool verification.',
      biggestChallenge: 'Maintaining semantic context across thousands of files without exceeding LLM context windows or incurring runaway token costs.',
      whatLearned: 'Mastered DAG agent state machines, structured JSON schema function calling, semantic vector indexing, and isolated container execution.',
      futureImprovements: 'Autonomous multi-repository cross-referencing and local offline model support via Ollama/vLLM.'
    },
    galleryImages: [
      { title: 'Agent Orchestration Graph', description: 'Visual interactive DAG showing real-time agent dispatch and state transitions.', type: 'ui' },
      { title: 'Live Sandbox Terminal', description: 'Streaming console output showing subagent executing bash commands and unit tests.', type: 'code' },
      { title: 'Semantic Code RAG View', description: 'Interactive vector search results displaying retrieved AST code chunks with relevance scores.', type: 'ui' }
    ]
  },
  {
    id: 'brain-tumor-detection',
    name: 'Brain Tumor Detection & Classification using CNN',
    tagline: 'Automated MRI-Based Classifier (Glioma, Meningioma, Pituitary) & Full-Stack Web App',
    shortDescription: 'Built an automated MRI-based brain tumor classifier (Glioma, Meningioma, Pituitary) using a lightweight CNN, with a full-stack web interface for real-time prediction and confidence scoring. Owned end-to-end delivery — dataset preparation, model training, backend API, and frontend UI.',
    longDescription: 'NeuroVision AI is a medical computer vision diagnostic platform engineered to assist radiologists in early brain tumor classification (Glioma, Meningioma, Pituitary, or No Tumor). Powered by transfer learning architectures and customized CNN layers in TensorFlow/Keras, the pipeline performs automated MRI skull stripping, contrast enhancement, histogram equalization, and Grad-CAM saliency mapping to visually highlight affected brain regions.',
    problemStatement: 'Manual MRI evaluation is time-intensive and susceptible to subjective variability, especially in early-stage micro-tumors where subtle radiological signs can be missed.',
    solution: 'An end-to-end diagnostic API and interactive interface that processes DICOM/PNG MRI scans, running deep CNN inference in under 120ms with visual Grad-CAM heatmap overlays.',
    features: [
      'Multi-class tumor classification with 97.4% test accuracy across Glioma, Meningioma & Pituitary.',
      'Grad-CAM (Gradient-weighted Class Activation Mapping) explaining exactly what the neural network sees.',
      'Automated OpenCV preprocessing: Skull-stripping, bounding box isolation, and Gaussian denoising.',
      'Confidence calibration metrics with real-time interactive diagnostic probability meters.',
      'FastAPI REST endpoints containerized for zero-downtime medical edge inference.',
      'Exportable clinical summary reports with classification breakdown and localized heatmap slices.'
    ],
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'FastAPI', 'NumPy', 'Matplotlib', 'Docker', 'React.js'],
    contribution: 'Collected, cleaned, and augmented over 7,000 multi-sequence MRI scans. Engineered the CNN transfer-learning model, implemented Grad-CAM interpretability algorithms, and constructed the FastAPI inference gateway.',
    challengesFaced: 'Severe class imbalance between rare tumor subtypes and healthy scans. Resolved through customized data augmentation (elastic deformations, affine rotations), focal loss weighting, and dropout regularization.',
    outcome: 'Delivered 97.4% test accuracy and 98.1% recall on validation benchmarks with sub-150ms inference latency, verified with visual saliency alignment.',
    futureImprovements: 'Implement 3D volumetric MRI segmentation using 3D U-Net architectures for exact tumor volume measurements.',
    githubLink: 'https://github.com/imSaurav06/brain_tumer_Detection',
    liveLink: 'https://github.com/imSaurav06/brain_tumer_Detection',
    iconName: 'Brain',
    architecture: {
      nodes: [
        { name: 'MRI Input Client', details: 'Web interface allowing clinicians to drag-and-drop axial, coronal, and sagittal MRI slices.' },
        { name: 'OpenCV Pipeline', details: 'Automated cropping, histogram equalization, contour detection, and dimension scaling.' },
        { name: 'CNN Inference Engine', details: 'Deep convolutional layers extracting spatial feature maps with softmax probabilities.' },
        { name: 'Grad-CAM Generator', details: 'Backpropagates gradients to calculate heatmap saliency over the final convolutional layer.' },
        { name: 'Diagnostic Report', details: 'Synthesizes classification confidence, tumor classification, and overlaid visual report.' }
      ],
      description: 'MRI scans are normalized and cropped via OpenCV, passed to the CNN inference engine for classification, and highlighted with Grad-CAM heatmaps before returning a structured diagnosis.'
    },
    techStackBreakdown: {
      frontend: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Canvas API'],
      backend: ['Python 3.11', 'FastAPI', 'Uvicorn'],
      database: ['Model Checkpoints (.h5/ONNX)', 'S3 Storage'],
      authentication: ['API Token Auth'],
      deployment: ['Docker', 'NVIDIA CUDA GPU Instances'],
      thirdPartyServices: ['TensorFlow 2.15', 'OpenCV Computer Vision']
    },
    interviewPrep: {
      whyBuilt: 'To apply cutting-edge deep learning to high-stakes healthcare diagnostics, proving machine learning can provide transparent and interpretable clinical aids.',
      biggestChallenge: 'Achieving explainability: doctors will not trust a black-box model. Implementing Grad-CAM visual heatmaps was essential to validate that the model was looking at the actual tumor rather than image artifacts.',
      whatLearned: 'Mastered convolutional feature extractors, backpropagation gradient mathematics for saliency maps, and GPU acceleration optimization.',
      futureImprovements: 'Deploy on lightweight hospital edge devices using TensorRT and ONNX runtime.'
    },
    galleryImages: [
      { title: 'MRI Saliency Heatmap', description: 'Grad-CAM visualization highlighting exact tumor coordinates on axial brain MRI.', type: 'ui' },
      { title: 'Model Training Loss & Accuracy Curves', description: 'Validation convergence curves showing training stability over 50 epochs.', type: 'code' },
      { title: 'Clinical Prediction Dashboard', description: 'Real-time classification confidence percentages with risk assessment breakdown.', type: 'ui' }
    ]
  },
  {
    id: 'fittrack',
    name: 'FitTrack — MERN Stack Fitness Tracker',
    tagline: 'MERN Full-Stack Fitness Tracker & Calorie Analytics',
    shortDescription: 'Built and deployed a full-stack fitness tracker with secure JWT authentication, workout CRUD, and natural-language workout parsing.',
    longDescription: 'FitTrack is a production-ready health & fitness web platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js), Redux Toolkit, and Material UI. It features secure JWT authentication, natural-language workout parsing, and rich interactive analytics dashboards with calorie tracking, dynamic charts, and date-wise workout history backed by MongoDB Atlas.',
    problemStatement: 'Tracking diverse workout sets, cardio routines, and calorie expenditures manually in spreadsheets or generic notes is fragmented and lacks visual analytics.',
    solution: 'A unified MERN application that allows users to log workouts via structured forms or natural language, instantly computing calorie burns and generating interactive analytics charts.',
    features: [
      'Secure User Authentication (Sign-up/Login) via JWT and BCrypt.',
      'Workout CRUD operations with customized exercise types, sets, reps, and weights.',
      'Natural-language workout parsing converting text logs into structured exercise schemas.',
      'Interactive Analytics Dashboards displaying weekly/monthly calorie tracking charts.',
      'Date-wise workout history calendar with search and category filtering.',
      'Persistent cloud storage backed by MongoDB Atlas with indexed queries.'
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux Toolkit', 'JWT', 'Material UI', 'MongoDB Atlas'],
    contribution: 'End-to-end full-stack development: Designed the Material UI and responsive React frontend, built Express REST endpoints with JWT middleware, and configured MongoDB Atlas database models.',
    challengesFaced: 'Handling real-time state synchronization across multi-metric charts and workout logs without redundant network requests. Solved by implementing Redux Toolkit slices with normalized state.',
    outcome: 'Deployed full-stack platform with sub-second dashboard rendering and automated analytics calculation.',
    futureImprovements: 'Add social workout sharing and mobile push reminders.',
    githubLink: 'https://github.com/imSaurav06/-FitTrackk-mern-project',
    liveLink: 'https://github.com/imSaurav06/-FitTrackk-mern-project',
    iconName: 'Activity',
    architecture: {
      nodes: [
        { name: 'React Client', details: 'React SPA with Redux Toolkit and Material UI components.' },
        { name: 'Express API Server', details: 'RESTful API gateway handling workout CRUD and JWT auth verification.' },
        { name: 'NLP Parser', details: 'Rule-based and regex parser extracting workout metrics from text logs.' },
        { name: 'MongoDB Atlas', details: 'Cloud database storing user workout logs, credentials, and profile metrics.' }
      ],
      description: 'The React Client dispatches Redux actions to Express REST endpoints. Authenticated requests update MongoDB Atlas and re-render real-time charts.'
    },
    techStackBreakdown: {
      frontend: ['React.js', 'Redux Toolkit', 'Material UI', 'Tailwind CSS'],
      backend: ['Node.js', 'Express.js', 'REST APIs'],
      database: ['MongoDB Atlas (Mongoose)'],
      authentication: ['JWT (JSON Web Tokens)', 'BCrypt'],
      deployment: ['Vercel', 'Render', 'MongoDB Cloud'],
      thirdPartyServices: ['Chart.js / Recharts']
    },
    interviewPrep: {
      whyBuilt: 'To master robust state management with Redux Toolkit and full-stack MERN data pipelines.',
      biggestChallenge: 'Designing efficient aggregation pipelines in MongoDB to compute date-wise calorie sums across hundreds of logged exercises.',
      whatLearned: 'Mastered Redux Toolkit, JWT token authentication, and building interactive data visualization dashboards.',
      futureImprovements: 'Integrate wearable device synchronization via health APIs.'
    },
    galleryImages: [
      { title: 'Analytics Dashboard', description: 'Calorie burn charts and weekly workout volume tracking.', type: 'ui' },
      { title: 'Workout Log Sheet', description: 'Interactive exercise table with sets, reps, and weights input.', type: 'ui' }
    ]
  },
  {
    id: 'texflow',
    name: 'TexFlow: AI B2B Textile Marketplace',
    tagline: 'AI-Powered Intelligent Commerce & Supply Chain Platform',
    shortDescription: 'A modern B2B industrial marketplace matching textile mills, garment manufacturers, and global buyers with automated AI RFQ matching and predictive pricing.',
    longDescription: 'TexFlow is an enterprise B2B platform engineered for the global textile manufacturing industry. It replaces fragmented WhatsApp and email brokers with a unified digital ecosystem. Featuring Gemini AI for intelligent Request-for-Quote (RFQ) parsing, automated fabric specification matching (GSM, yarn count, weave type), real-time wholesale price negotiation chat, and secure multi-tier order tracking.',
    problemStatement: 'Textile supply chains suffer from 2-4 week procurement delays, manual specification negotiation, and lack of verified pricing transparencies between spinning mills and garment exporters.',
    solution: 'An intelligent digital marketplace integrating natural language RFQ extraction with vector search to match buyers with certified mills within seconds, cutting procurement cycles by 70%.',
    features: [
      'Gemini AI RFQ Parser: Converts unstructured buyer emails and spec sheets into structured quote requests.',
      'Semantic Fabric Matching using vector similarity over yarn count, blend ratio, GSM, and certifications.',
      'Real-time Multi-Party Bidding & Negotiation rooms backed by WebSockets.',
      'Milestone-based escrow order tracking with automated quality audit checkpoints.',
      'Interactive Analytics Dashboard displaying live raw cotton, yarn, and polyester index pricing.',
      'Role-based portals for Buyers, Mills, and Verified Quality Inspectors.'
    ],
    technologies: ['React 18', 'Node.js', 'Express.js', 'MongoDB', 'Gemini AI API', 'WebSockets', 'Tailwind CSS', 'Docker', 'Redis'],
    contribution: 'Designed and implemented the core full-stack platform, engineered the Gemini AI RFQ parsing microservice, built real-time WebSocket negotiation channels, and structured MongoDB schemas for complex textile specs.',
    challengesFaced: 'Handling diverse non-standard textile jargon across global suppliers. Solved by implementing prompt few-shot conditioning with an internal textile ontology dictionary, generating verified JSON schemas.',
    outcome: 'Accelerated quote turnaround from 14 days to under 4 hours, supporting over 500+ fabric permutations with zero catalog mismatch errors.',
    futureImprovements: 'Integrate automated computer vision fabric defect detection during mill inspection uploads.',
    githubLink: 'https://github.com/imSaurav06',
    liveLink: 'https://github.com/imSaurav06',
    iconName: 'ShoppingBag',
    architecture: {
      nodes: [
        { name: 'Buyer & Mill Web App', details: 'React SPA with Tailwind CSS, offering live bidding and product catalog filtering.' },
        { name: 'Gateway Server', details: 'Express.js API server managing REST routes, JWT auth, and WebSocket sockets.' },
        { name: 'Gemini AI Parsing Service', details: 'Extracts structured fabric parameters (GSM, weave, yarn) from buyer text specs.' },
        { name: 'Redis Cache & Pub/Sub', details: 'Low-latency state cache for active bidding rooms and real-time alerts.' },
        { name: 'MongoDB Cluster', details: 'Stores catalogs, RFQs, milestone escrow records, and inspection logs.' }
      ],
      description: 'Buyers submit inquiries via the web portal. The Gemini AI Parsing Service normalizes parameters, Redis broadcasts the RFQ to matched mills, and WebSocket channels facilitate instant negotiation.'
    },
    techStackBreakdown: {
      frontend: ['React 18', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion'],
      backend: ['Node.js', 'Express.js', 'WebSockets (Socket.io)'],
      database: ['MongoDB', 'Redis'],
      authentication: ['JWT (Role-based access: Buyer, Mill, Admin)'],
      deployment: ['Docker', 'Nginx', 'VPS Hosting'],
      thirdPartyServices: ['Gemini 1.5 Pro API', 'Razorpay Payment Gateway']
    },
    interviewPrep: {
      whyBuilt: 'To digitize traditional high-friction industrial commerce using modern generative AI and real-time web infrastructure.',
      biggestChallenge: 'Building real-time simultaneous bidding negotiations where price updates must be broadcast instantly without race conditions.',
      whatLearned: 'Mastered WebSocket concurrency, Redis Pub/Sub architecture, and structuring LLM prompt engineering for complex B2B domain schemas.',
      futureImprovements: 'Automated logistics calculation integrating ocean freight rate APIs.'
    },
    galleryImages: [
      { title: 'RFQ AI Parser Interface', description: 'Interactive AI panel converting raw text specifications into structured fabric orders.', type: 'ui' },
      { title: 'Live Mill Bidding Room', description: 'Real-time WebSocket auction room where mills submit competitive price quotes.', type: 'ui' },
      { title: 'Supply Chain Escrow Tracker', description: 'Visual milestone tracker monitoring spinning, weaving, dyeing, and dispatch.', type: 'ui' }
    ]
  },
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
