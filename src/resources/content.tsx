import {
	About,
	Blog,
	Gallery,
	Home,
	Newsletter,
	Person,
	Social,
	Work,
} from '@/types'
import { Line, Row, Text } from '@once-ui-system/core'

const person: Person = {
	firstName: 'Armando',
	lastName: 'Peña Tamayo',
	name: `Armando Peña Tamayo`,
	role: 'Full-Stack Engineer',
	avatar: '/images/avatar.webp', // Replace with your actual avatar
	email: 'arman2p284@gmail.com', // Update with real email
	location: 'America/Havana', // IANA timezone - adjust if needed (you can use Miami for perception)
	languages: ['English', 'Spanish'],
	locale: 'en',
}

const newsletter: Newsletter = {
	display: true,
	title: <>Subscribe to {person.firstName}'s Newsletter</>,
	description: (
		<>
			Weekly insights on AI automation, SaaS development, and building
			efficient systems that drive real business results.
		</>
	),
}

const social: Social = [
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
]

const home: Home = {
	path: '/',
	image: '/images/og/home.jpg',
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

export { person, social, newsletter, home, about, blog, work, gallery }
