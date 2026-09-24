import {
  Boxes,
  BrainCircuit,
  Cloud,
  Database,
  GitBranch,
  GraduationCap,
  Layers,
  Network,
  Plug,
  Server,
  Terminal,
  Workflow,
  Zap,
  type LucideIcon,
} from 'lucide-react';

export type TechNode = {
  id: string;
  label: string;
  desc: string;
  icon: LucideIcon;
  angle: number;
  ring: number;
};

export type Project = {
  id: string;
  name: string;
  tag: string;
  businessLabel: string;
  problem: string;
  solution: string;
  role: string;
  contribution: string[];
  highlights: string[];
  stack: string[];
  flow: { label: string; icon: string }[];
};

export type JourneyStop = {
  year: string;
  role: string;
  company: string;
  dates: string;
  points: string[];
  tech: string[];
};

export type Capability = {
  title: string;
  desc: string;
  tech: string[];
  icon: LucideIcon;
};

export const heroTerminal: { text: string; status: 'ok' | 'info' }[] = [
  { text: 'python developer.py', status: 'info' },
  { text: '> initializing developer...', status: 'info' },
  { text: 'ERP systems — online', status: 'ok' },
  { text: 'Backend services — online', status: 'ok' },
  { text: 'API integrations — online', status: 'ok' },
  { text: 'AI automation — online', status: 'ok' },
  { text: 'Infrastructure tools — online', status: 'ok' },
  { text: '> 7 production systems deployed', status: 'info' },
  { text: '> status: building real-world systems', status: 'info' },
];

export const heroPositioning = 'Building production-ready ERP, backend and automation systems that turn complex business workflows into practical software.';

export const heroCapabilities = [
  { label: 'ERP Systems', href: '#build' },
  { label: 'Backend', href: '#build' },
  { label: 'API Integrations', href: '#build' },
  { label: 'AI Automation', href: '#build' },
  { label: 'Infrastructure', href: '#build' },
];

export const quickFacts = [
  { label: '1.5+ yrs', hint: 'Experience' },
  { label: 'Odoo & Python', hint: 'Core Stack' },
  { label: 'ERP', hint: 'Systems' },
  { label: 'APIs', hint: 'Integrations' },
  { label: 'AI', hint: 'Automation' },
];

export const profileData = [
  { label: 'Role', value: 'Software Developer' },
  { label: 'Focus', value: 'Python / Odoo / Backend' },
  { label: 'Builds', value: 'ERP / APIs / AI / Automation' },
  { label: 'Experience', value: '1.5+ years' },
  { label: 'Education', value: 'Computer Science & Engineering' },
  { label: 'CGPA', value: '9.27' },
];

export const techNodes: TechNode[] = [
  { id: 'python', label: 'Python', desc: 'Primary language across backend, Odoo, automation and AI integrations.', icon: Terminal, angle: 0, ring: 0 },
  { id: 'odoo', label: 'Odoo', desc: 'ERP development — custom modules, workflows, enterprise apps.', icon: Boxes, angle: 60, ring: 1 },
  { id: 'django', label: 'Django', desc: 'Backend application development and business platforms.', icon: Server, angle: 120, ring: 1 },
  { id: 'fastapi', label: 'FastAPI', desc: 'Lightweight API and service development.', icon: Zap, angle: 180, ring: 1 },
  { id: 'flask', label: 'Flask', desc: 'Internal tools and deployment platforms.', icon: Plug, angle: 240, ring: 1 },
  { id: 'openai', label: 'OpenAI', desc: 'AI-powered resume parsing and HR automation.', icon: BrainCircuit, angle: 300, ring: 1 },
  { id: 'postgres', label: 'PostgreSQL', desc: 'Stored procedures, bulk operations, database design.', icon: Database, angle: 30, ring: 2 },
  { id: 'docker', label: 'Docker', desc: 'Containerized deployment and infrastructure.', icon: Cloud, angle: 90, ring: 2 },
  { id: 'langchain', label: 'LangChain', desc: 'LLM application framework for AI workflows.', icon: Network, angle: 150, ring: 2 },
  { id: 'rest', label: 'REST APIs', desc: 'Third-party integrations: ShipBob, WooCommerce, FedEx.', icon: GitBranch, angle: 210, ring: 2 },
  { id: 'odoo2', label: 'Owl Framework', desc: 'Odoo UI customization and frontend components.', icon: Layers, angle: 270, ring: 2 },
  { id: 'automation', label: 'Automation', desc: 'Apache config validation, SSL, deployment pipelines.', icon: Workflow, angle: 330, ring: 2 },
];

export const techRelationships = [
  { title: 'Backend Systems', flow: ['Python', 'Backend Development', 'Django / Flask / FastAPI', 'PostgreSQL / APIs', 'Production Applications'] },
  { title: 'ERP Development', flow: ['Python', 'Odoo', 'Custom Modules', 'ERP Workflows', 'Business Systems'] },
  { title: 'AI Automation', flow: ['Python', 'OpenAI', 'AI Integration', 'Resume Parsing', 'HR Automation'] },
  { title: 'Infrastructure', flow: ['Domain + Config', 'Apache Config', 'Validation + SSL', 'Docker', 'Deployment'] },
];

export const journeyStops: JourneyStop[] = [
  {
    year: '2024',
    role: 'Odoo Intern',
    company: 'Wan Buffer Services',
    dates: 'Nov 2024 — May 2025',
    points: [
      'Customized five core Odoo modules — Sales, Purchase, Manufacturing, CRM, and Recruitment.',
      'Assisted with AI integration within Odoo and HR automation using Python.',
    ],
    tech: ['Odoo', 'Python', 'AI'],
  },
  {
    year: '2025',
    role: 'Software Developer (Odoo Trainee)',
    company: 'CodeTrade India Pvt. Ltd.',
    dates: 'Sep 2025 — Mar 2026',
    points: [
      '6-month internship covering Odoo fundamentals, custom module creation, and business workflow implementation.',
    ],
    tech: ['Odoo 17', 'Python', 'PostgreSQL'],
  },
  {
    year: '2026',
    role: 'Software Developer',
    company: 'CodeTrade India Pvt. Ltd.',
    dates: 'Apr 2026 — Present',
    points: [
      'Odoo 17 & 18 modules for hospital management, logistics, and e-commerce marketplace clients.',
      'Flask-based Apache/SSL deployment platform and Django + FastAPI services platform.',
      'API integrations: ShipBob, WooCommerce, FedEx, and OpenAI.',
    ],
    tech: ['Odoo 18', 'Flask', 'Django', 'FastAPI', 'Docker', 'OpenAI'],
  },
];

export const projects: Project[] = [
  {
    id: 'logistics',
    name: 'Logistics & Delivery Tracking',
    tag: 'Odoo 17 Enterprise',
    businessLabel: 'Unified Delivery Workflow',
    contribution: ['WooCommerce + ShipBob integration', 'FedEx tracking API', 'Unified Odoo dashboard'],
    problem: 'Order and shipment data scattered across WooCommerce and ShipBob with no unified visibility.',
    solution: 'Integration layer unifying orders, fulfillment, and FedEx tracking into one Odoo dashboard.',
    role: 'Built WooCommerce, ShipBob, and FedEx API integrations.',
    highlights: [
      'Integration layer connecting WooCommerce and ShipBob, syncing order and fulfillment data.',
      'FedEx tracking API for real-time delivery status in the same dashboard.',
    ],
    stack: ['Odoo 17 Enterprise', 'Python', 'REST APIs', 'ShipBob', 'WooCommerce', 'FedEx'],
    flow: [
      { label: 'WooCommerce', icon: 'plug' },
      { label: 'Odoo', icon: 'box' },
      { label: 'ShipBob', icon: 'plug' },
      { label: 'FedEx API', icon: 'plug' },
      { label: 'Delivery Dashboard', icon: 'screen' },
    ],
  },
  {
    id: 'marketplace',
    name: 'E-Commerce Marketplace',
    tag: 'Odoo 18 Enterprise',
    businessLabel: 'Multi-Seller Platform',
    contribution: ['Custom checkout flow', 'Seller access control', 'Invoice & email branding'],
    problem: 'Needed a platform where independent sellers could manage their own stores.',
    solution: 'Multi-seller marketplace with custom checkout and seller-specific access control.',
    role: 'Developed checkout flow, seller access structure, and custom branding.',
    highlights: [
      'Full custom checkout flow and events showcase.',
      'Seller-wise access so each operates independently within the marketplace.',
      'Customized invoice reports and email templates for seller-specific branding.',
    ],
    stack: ['Odoo 18 Enterprise', 'Python', 'XML', 'JS', 'PostgreSQL'],
    flow: [
      { label: 'Multi-Seller Listings', icon: 'layers' },
      { label: 'Custom Checkout', icon: 'screen' },
      { label: 'Seller Access Control', icon: 'check' },
      { label: 'Custom Invoices', icon: 'box' },
    ],
  },
  {
    id: 'resume-parser',
    name: 'Smart Resume Parser',
    tag: 'Odoo + OpenAI',
    businessLabel: 'HR Automation',
    contribution: ['OpenAI API integration', 'Prompt engineering for extraction', 'Multi-language support'],
    problem: 'HR teams manually screening hundreds of resumes needed automation.',
    solution: 'AI-powered tool extracting structured candidate info from DOCX and PDF resumes.',
    role: 'Integrated OpenAI API and engineered prompts for extraction and sentiment.',
    highlights: [
      'OpenAI API extracts experience, education, skills, and role fit across multiple languages.',
      'Prompt-engineered sentiment read per candidate, reducing manual screening effort.',
    ],
    stack: ['Odoo 17 Enterprise', 'Python', 'OpenAI API', 'TextFlow'],
    flow: [
      { label: 'PDF / DOCX', icon: 'plug' },
      { label: 'OpenAI API', icon: 'brain' },
      { label: 'Information Extraction', icon: 'check' },
      { label: 'Skills / Education / Experience', icon: 'layers' },
      { label: 'Recruitment Workflow', icon: 'screen' },
    ],
  },
  {
    id: 'eduassess',
    name: 'EduAssess',
    tag: 'Django + React',
    businessLabel: 'University Exam Platform',
    contribution: ['AI proctoring integration', 'Automated interview & evaluation engine', 'Section-wise analytics dashboard'],
    problem: 'Universities relying on manual entrance examinations lacked a secure, scalable, and AI-assisted digital assessment workflow.',
    solution: 'Comprehensive university entrance examination and AI assessment platform covering candidate registration, secure online exams, AI-powered interviews, proctoring, and end-to-end analytics.',
    role: 'Architected the full-stack platform — Django backend, React frontend, AI interview engine, proctoring integration, and analytics reporting.',
    highlights: [
      'Secure online examination with multi-section support: Quantitative Aptitude, Logical Reasoning, and Technical Assessment.',
      'AI-based interview module with automated scheduling, session recording, AI-driven evaluation, and interview reports for shortlisted candidates.',
      'Integrated remote proctoring with configurable third-party proctoring solutions for secure candidate monitoring.',
      'Advanced analytics: candidate-wise and section-wise performance including attempted/unattempted, correct/incorrect, sectional scores, and overall insights.',
      'University-controlled administration with configurable workflows, data ownership, hosting flexibility, and source-code access options.',
      'Flexible architecture supporting customised assessment parameters, dashboards, reports, and third-party integrations.',
    ],
    stack: ['Django', 'React', 'Python', 'PostgreSQL', 'AI / Proctoring APIs', 'REST APIs'],
    flow: [
      { label: 'Candidate Registration', icon: 'screen' },
      { label: 'Credential & Slot Assignment', icon: 'check' },
      { label: 'Online Examination', icon: 'layers' },
      { label: 'AI Proctoring', icon: 'brain' },
      { label: 'Automated Evaluation', icon: 'check' },
      { label: 'Performance Analytics', icon: 'database' },
      { label: 'AI Interview', icon: 'brain' },
      { label: 'Final Assessment & Report', icon: 'box' },
    ],
  },
  {
    id: 'construction',
    name: 'Construction Services Platform',
    tag: 'Django + FastAPI',
    businessLabel: 'Service Marketplace',
    contribution: ['Customer & professional flows', 'Admin teams section', 'Django + FastAPI architecture'],
    problem: 'Skilled construction professionals needed to connect with customers posting projects.',
    solution: 'Platform connecting professionals with customers posting project requirements.',
    role: 'Designed both user flows and admin teams section.',
    highlights: [
      'Two flows: customers posting requirements, professionals managing assigned work.',
      'Admin-facing teams section for managing employees and project assignments.',
    ],
    stack: ['Django', 'FastAPI', 'Python', 'PostgreSQL'],
    flow: [
      { label: 'Customer Posts', icon: 'screen' },
      { label: 'Django Backend', icon: 'server' },
      { label: 'FastAPI Services', icon: 'zap' },
      { label: 'Professional Dashboard', icon: 'screen' },
    ],
  },
  {
    id: 'deployment',
    name: 'Internal Site Deployment Platform',
    tag: 'Flask',
    businessLabel: 'Infrastructure Automation',
    contribution: ['Config validation pipeline', 'Automatic SSL via Certbot', 'Role-based dashboards'],
    problem: 'Manual domain deployment was slow and error-prone.',
    solution: 'Flask platform that automates domain deployment from a validated configuration.',
    role: 'Built the full platform — validation, SSL, role-based dashboards.',
    highlights: [
      'Submit domain + config → validates apachectl configtest → auto-deploys.',
      'Automatic SSL certificate generation per domain via Certbot.',
      'Role-based admin and user dashboards for .conf and folder access.',
    ],
    stack: ['Flask', 'Python', 'Apache', 'SSL/Certbot', 'Docker'],
    flow: [
      { label: 'Domain + Config', icon: 'plug' },
      { label: 'Apache Config', icon: 'box' },
      { label: 'Validation', icon: 'check' },
      { label: 'SSL / Certbot', icon: 'check' },
      { label: 'Docker', icon: 'cloud' },
      { label: 'Deployment', icon: 'arrow' },
    ],
  },
  {
    id: 'walletgenie',
    name: 'WalletGenie',
    tag: 'Python + Django',
    businessLabel: 'Personal Finance App',
    contribution: ['Django backend', 'Transaction & balance features', 'Rewards management'],
    problem: 'Needed a personal finance app for tracking transactions and rewards.',
    solution: 'Personal finance and wallet application with transaction history and rewards tracking.',
    role: 'Built the Django backend with transaction and balance features.',
    highlights: [
      'Transaction history and balance tracking.',
      'Rewards management for day-to-day finances.',
    ],
    stack: ['Python', 'Django'],
    flow: [
      { label: 'Transaction Entry', icon: 'screen' },
      { label: 'Django Backend', icon: 'server' },
      { label: 'Balance Tracking', icon: 'database' },
      { label: 'Rewards', icon: 'check' },
    ],
  },
];

export const capabilities: Capability[] = [
  { title: 'ERP Systems', desc: 'Odoo customization, workflows and enterprise applications.', tech: ['Odoo 17', 'Odoo 18', 'Owl Framework'], icon: Boxes },
  { title: 'Backend Systems', desc: 'Python, Django, Flask and FastAPI services.', tech: ['Python', 'Django', 'Flask', 'FastAPI'], icon: Server },
  { title: 'API Integrations', desc: 'REST APIs and third-party platform connections.', tech: ['ShipBob', 'WooCommerce', 'FedEx', 'OpenAI'], icon: Plug },
  { title: 'AI Automation', desc: 'OpenAI-powered workflows and HR automation.', tech: ['OpenAI', 'LangChain', 'Prompt Engineering'], icon: BrainCircuit },
  { title: 'Infrastructure Tools', desc: 'Docker, Apache and SSL automation.', tech: ['Docker', 'Apache', 'SSL/Certbot'], icon: Cloud },
  { title: 'LMS / E-Learning', desc: 'Open edX and XBlock development.', tech: ['Open edX', 'XBlock'], icon: GraduationCap },
];

export const engineeringSteps = [
  { label: 'Understand the problem', icon: 'search' },
  { label: 'Design the solution', icon: 'design' },
  { label: 'Build the backend', icon: 'code' },
  { label: 'Integrate systems', icon: 'plug' },
  { label: 'Test & validate', icon: 'check' },
  { label: 'Deploy', icon: 'rocket' },
];


