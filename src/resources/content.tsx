import {
	About,
	Blog,
	Testimonials,
	Gallery,
	Home,
	Newsletter,
	Person,
	Social,
	Work,
	Gigs,
} from '@/types'
import { Line, Row, Text } from '@once-ui-system/core'

const person: Person = {
	firstName: 'Armando',
	lastName: 'Peña Tamayo',
	name: `Armando Peña Tamayo`,
	role: 'Full-Stack Engineer',
	avatar: '/images/avatar.webp',
	email: 'arman2p284@gmail.com',
	location: 'America/New_York', // IANA timezone - adjust if needed (you can use Miami for perception)
	languages: ['English', 'Spanish'],
	locale: 'en',
	phone: '+5351705953',
}

const newsletter: Newsletter = {
	display: true,
	title: <>Subscribe to {person.firstName}'s Newsletter</>,
	description: (
		<>
			Monthly insights on AI automation, SaaS development, and building
			efficient systems that drive real business results.
		</>
	),
}

const social: Social = [
	{
		name: 'CV / Resume',
		icon: 'cv',
		link: 'https://armando-swe-cv.vercel.app', // Update with your real GitHub
		essential: true,
	},
	{
		name: 'GitHub',
		icon: 'github',
		link: 'https://github.com/armando284', // Update with your real GitHub
		essential: true,
	},
	{
		name: 'LinkedIn',
		icon: 'linkedin',
		link: 'https://www.linkedin.com/in/armando-p-tamayo-19a449417/',
		essential: true,
	},
	{
		name: 'Medium',
		icon: 'medium', // Assuming the icon exists or add it
		link: 'https://medium.com/@armanp',
		essential: false,
	},
	{
		name: 'Email',
		icon: 'email',
		link: `mailto:${person.email}`,
		essential: true,
	},
	{
		name: 'WhatsApp',
		icon: 'whatsapp',
		link: `https://wa.me/${person.phone}`,
		essential: true,
	},
]

const home: Home = {
	path: '/',
	image: '/images/og/home.png',
	label: 'Home',
	title: `${person.name}'s Portfolio`,
	description: `Full-Stack Engineer specializing in AI Automation and SaaS MVPs`,
	headline: <>AI-Powered Full-Stack Engineer | Automating manual processes</>,
	featured: {
		display: true,
		title: (
			<Row
				gap="12"
				vertical="center">
				<strong className="ml-4">AI Automation</strong>{' '}
				<Line
					background="brand-alpha-strong"
					vert
					height="20"
				/>
				<Text
					marginRight="4"
					onBackground="brand-medium">
					Featured Project
				</Text>
			</Row>
		),
		href: '/work/ai-email-automation', // Update once you create the project page
	},
	subline: (
		<>
			I'm {person.firstName}, a senior full-stack engineer with 8+ years
			of experience building AI-powered automations and production-ready
			SaaS MVPs. I help startups and companies replace costly manual
			operations with intelligent systems using Next.js, Supabase, n8n,
			and OpenAI, delivering measurable ROI in weeks.
		</>
	),
}

const about: About = {
	path: '/about',
	label: 'About',
	title: `About – ${person.name}`,
	description: `Meet ${person.name}, Full-Stack Engineer specializing in AI Automation`,
	tableOfContent: {
		display: true,
		subItems: false,
	},
	avatar: {
		display: true,
	},
	calendar: {
		display: true,
		link: 'https://calendar.app.google/eXDW2PVV6JQyvaK6A', // Add your Calendly
	},
	intro: {
		display: true,
		title: 'Introduction',
		description: (
			<>
				I am a results-driven full-stack engineer based in LATAM with
				strong English proficiency. I specialize in building AI
				automation workflows and complete SaaS applications that
				dramatically reduce operational costs and accelerate
				time-to-market.
			</>
		),
	},
	work: {
		display: true,
		title: 'Work Experience',
		experiences: [
			{
				company: 'Various Startups & Clients',
				timeframe: '2025 - Present',
				role: 'Senior Full-Stack Developer (Freelance)',
				achievements: [
					<>
						Built AI Email Automation System with n8n + OpenAI,
						reducing manual email processing time by ~70% and
						eliminating repetitive tasks.
					</>,
					<>
						Developed AI Document Generation System for insurance,
						cutting document creation time from hours to minutes
						(~80% faster).
					</>,
				],
				images: [],
			},
			{
				company: 'Confidential Projects',
				timeframe: '2024 - 2025',
				role: 'Senior Full-Stack Developer',
				achievements: [
					<>
						Delivered AI + AR Virtual Tailoring Platform MVP in 4
						months, reducing time-to-market by ~50%.
					</>,
					<>
						Built Events Management SaaS backend with AWS Lambda,
						improving reliability and reducing debugging time by
						~40%.
					</>,
				],
				images: [],
			},
			{
				company: 'Tourism & Education Platforms',
				timeframe: '2023 - 2024',
				role: 'Full-Stack Developer',
				achievements: [
					<>
						Modernized legacy Angular systems and improved
						performance/SEO, increasing page load speed by ~30% and
						reducing deployment costs by 50%.
					</>,
				],
				images: [],
			},
		],
	},
	studies: {
		display: true,
		title: 'Education',
		institutions: [
			{
				name: 'University of Informatic Sciences',
				description: (
					<>Bachelor’s Degree in Computer Science (2009 - 2013)</>
				),
			},
		],
	},
	technical: {
		display: true,
		title: 'Technical Expertise',
		skills: [
			{
				title: 'AI Automation & Backend',
				description: (
					<>
						Expert in building intelligent workflows with n8n,
						OpenAI, Node.js, Supabase, and PostgreSQL that replace
						expensive manual processes.
					</>
				),
				tags: [
					{ name: 'n8n', icon: 'automation' }, // Adjust icons as available
					{ name: 'OpenAI', icon: 'ai' },
					{ name: 'Node.js', icon: 'nodejs' },
					{ name: 'Supabase', icon: 'supabase' },
				],
				images: [],
			},
			{
				title: 'Frontend & Full-Stack',
				description: (
					<>
						Production-grade applications with React, Next.js,
						TypeScript, Angular, Tailwind, and modern architecture
						focused on performance and scalability.
					</>
				),
				tags: [
					{ name: 'React', icon: 'react' },
					{ name: 'Next.js', icon: 'nextjs' },
					{ name: 'TypeScript', icon: 'typescript' },
					{ name: 'Angular', icon: 'angular' },
				],
				images: [],
			},
		],
	},
}

const blog: Blog = {
	path: '/blog',
	label: 'Blog',
	title: 'Writing about AI Automation and Full-Stack Development',
	description: `Practical insights, case studies, and lessons from building production AI systems and MVPs`,
}

const work: Work = {
	path: '/work',
	label: 'Work',
	title: `Projects – ${person.name}`,
	description: `AI Automation Systems and SaaS MVPs delivered with measurable business impact`,
}

const gallery: Gallery = {
	path: '/gallery',
	label: 'Gallery',
	title: `Project Screenshots – ${person.name}`,
	description: `Screenshots and visuals from recent projects`,
	images: [
		// AI Document Generation
		{
			src: '/images/projects/ai-document/new-case.png',
			alt: 'AI Document Generation - New Case',
			orientation: 'horizontal',
		},
		{
			src: '/images/projects/ai-document/letter.png',
			alt: 'AI Document Generation - Letter View',
			orientation: 'vertical',
		},
		{
			src: '/images/projects/ai-document/dashboard.png',
			alt: 'AI Document Generation Dashboard',
			orientation: 'horizontal',
		},

		// AI Email Automation
		{
			src: '/images/projects/ai-email/n8n-workflow.png',
			alt: 'AI Email Automation - n8n Workflow',
			orientation: 'horizontal',
		},
		{
			src: '/images/projects/ai-email/dashboard.png',
			alt: 'AI Email Automation Dashboard',
			orientation: 'horizontal',
		},
		{
			src: '/images/projects/ai-email/project-details.png',
			alt: 'AI Email Automation - Project Details',
			orientation: 'vertical',
		},

		// Virtual Tailoring Platform
		{
			src: '/images/projects/tailoring/ar-cam.png',
			alt: 'Virtual Tailoring Platform - AR Camera',
			orientation: 'vertical',
		},
		{
			src: '/images/projects/tailoring/suits.png',
			alt: 'Virtual Tailoring Platform - Suits Preview',
			orientation: 'horizontal',
		},
		{
			src: '/images/projects/tailoring/order-confirmed.png',
			alt: 'Virtual Tailoring Platform - Order Confirmed',
			orientation: 'horizontal',
		},

		// Events Management SaaS
		{
			src: '/images/projects/events/dashboard.png',
			alt: 'Events Management SaaS Dashboard',
			orientation: 'horizontal',
		},
		{
			src: '/images/projects/events/architecture.png',
			alt: 'Events Management SaaS Architecture Diagram',
			orientation: 'vertical',
		},
	],
}

const testimonials: Testimonials = {
	display: true,
	feedbacks: [
		{
			name: 'Reynier Perez',
			job: 'Software Engineer',
			message:
				"Armando is always available to give aid and effective ideas for the good of the project. He is an excellent teammate you won't regret working with!",
			image: '/images/feedback/reynier-perez.jpg',
		},
		{
			name: 'Betty Guiterrez',
			job: 'Team Leader',
			message:
				"I had the pleasure of working with Armando, and I am continually impressed by his exceptional skills and dedication. His expertise has been instrumental in ensuring the maintainability of the code. He's willingness to share knowledge and provide constructive feedback has contributed to a collaborative and supportive team environment.",
			image: '/images/feedback/betty-guiterrez.jpg',
		},
	],
}

const gigs: Gigs = {
	path: '/gigs',
	label: 'Gigs',
	title: `Freelance Services – ${person.name}`,
	description: `AI Automation, MVP Development, and Full-Stack Services to accelerate your business`,
	items: [
		{
			slug: 'ai-automation-with-n8n-openai',
			title: 'AI Automation with n8n + OpenAI',
			shortDescription:
				'Automate your business processes with intelligent workflows using n8n and OpenAI',
			fullDescription: (
				<>
					<p>
						I'll build custom AI-powered automation workflows that
						replace manual, repetitive tasks with intelligent
						systems.
					</p>
					<ul>
						<li>Email processing and auto-response systems</li>
						<li>Document generation and data extraction</li>
						<li>CRM integration and data synchronization</li>
						<li>Custom webhook integrations between your tools</li>
					</ul>
					<p>
						Perfect for businesses looking to reduce operational
						costs and save 10+ hours per week on manual tasks.
					</p>
				</>
			),
			pricingType: 'range',
			priceFrom: 300,
			priceTo: 800,
			currency: 'USD',
			deliveryTime: '1-2 weeks',
			technologies: [
				'n8n',
				'OpenAI',
				'Node.js',
				'Webhooks',
				'API Integration',
			],
			featured: true,
			contactLink: `mailto:${person.email}?subject=Inquiry: AI Automation with n8n + OpenAI`,
		},
		{
			slug: 'full-stack-mvp-development',
			title: 'Full-Stack MVP Development',
			shortDescription:
				'Build production-ready MVPs with Next.js, Supabase, and modern tech stack',
			fullDescription: (
				<>
					<p>
						I'll develop a complete, production-ready MVP from
						concept to deployment in 4-8 weeks.
					</p>
					<ul>
						<li>
							Full-stack development with Next.js 14+ and
							TypeScript
						</li>
						<li>
							Database design and implementation with Supabase
						</li>
						<li>
							Authentication, authorization, and user management
						</li>
						<li>Responsive UI with modern design systems</li>
						<li>Deployment and CI/CD setup</li>
					</ul>
					<p>
						Ideal for startups and entrepreneurs who need a
						validated product quickly without sacrificing quality.
					</p>
				</>
			),
			pricingType: 'range',
			priceFrom: 1500,
			priceTo: 4000,
			currency: 'USD',
			deliveryTime: '4-8 weeks',
			technologies: [
				'Next.js',
				'TypeScript',
				'Supabase',
				'Tailwind CSS',
				'PostgreSQL',
			],
			featured: true,
			contactLink: `mailto:${person.email}?subject=Inquiry: Full-Stack MVP Development`,
		},
		{
			slug: 'email-document-automation',
			title: 'Email & Document Automation',
			shortDescription:
				'Streamline email workflows and automate document generation with AI',
			fullDescription: (
				<>
					<p>
						I'll create intelligent systems to handle your email
						communications and document needs automatically.
					</p>
					<ul>
						<li>Smart email categorization and routing</li>
						<li>Automated document generation from templates</li>
						<li>PDF creation and management workflows</li>
						<li>Email campaign automation and follow-ups</li>
					</ul>
					<p>
						Great for teams drowning in administrative work who need
						to scale their operations efficiently.
					</p>
				</>
			),
			pricingType: 'range',
			priceFrom: 250,
			priceTo: 600,
			currency: 'USD',
			deliveryTime: '1-2 weeks',
			technologies: [
				'n8n',
				'OpenAI',
				'Node.js',
				'PDF Generation',
				'Email APIs',
			],
			featured: false,
			contactLink: `mailto:${person.email}?subject=Inquiry: Email & Document Automation`,
		},
		{
			slug: 'angular-react-maintenance',
			title: 'Angular & React Maintenance',
			shortDescription:
				'Maintain, refactor, and improve existing Angular or React applications',
			fullDescription: (
				<>
					<p>
						I'll help you maintain and improve your existing
						frontend applications with modern best practices.
					</p>
					<ul>
						<li>Bug fixes and performance optimization</li>
						<li>Code refactoring and technical debt reduction</li>
						<li>Library updates and dependency management</li>
						<li>Feature additions and UI improvements</li>
						<li>Testing and quality assurance</li>
					</ul>
					<p>
						Perfect for teams with legacy codebases that need
						ongoing maintenance or modernization.
					</p>
				</>
			),
			pricingType: 'range',
			priceFrom: 50,
			priceTo: 150,
			currency: 'USD',
			deliveryTime: 'Hourly / Retainer',
			technologies: [
				'Angular',
				'React',
				'TypeScript',
				'JavaScript',
				'Testing',
			],
			featured: false,
			contactLink: `mailto:${person.email}?subject=Inquiry: Angular & React Maintenance`,
		},
		{
			slug: 'api-integration-backend-development',
			title: 'API Integration & Backend Development',
			shortDescription:
				'Build robust APIs and integrate third-party services for your applications',
			fullDescription: (
				<>
					<p>
						I'll develop scalable backend solutions and integrate
						your applications with external services.
					</p>
					<ul>
						<li>RESTful and GraphQL API development</li>
						<li>
							Third-party service integrations (Stripe, Twilio,
							etc.)
						</li>
						<li>Database design and optimization</li>
						<li>Authentication and security implementation</li>
						<li>Performance monitoring and logging</li>
					</ul>
					<p>
						Ideal for projects that need solid backend architecture
						or complex integrations.
					</p>
				</>
			),
			pricingType: 'range',
			priceFrom: 400,
			priceTo: 1200,
			currency: 'USD',
			deliveryTime: '2-4 weeks',
			technologies: [
				'Node.js',
				'Express',
				'PostgreSQL',
				'REST APIs',
				'GraphQL',
			],
			featured: false,
			contactLink: `mailto:${person.email}?subject=Inquiry: API Integration & Backend Development`,
		},
	],
}

export {
	person,
	social,
	newsletter,
	home,
	about,
	blog,
	work,
	gallery,
	testimonials,
	gigs,
}
