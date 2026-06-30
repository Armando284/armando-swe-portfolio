'use client'

import {
	Badge,
	Button,
	Card,
	Column,
	Heading,
	Row,
	Text,
} from '@once-ui-system/core'
import type { Gigs } from '@/types'
import { useState } from 'react'

type Gig = Gigs['items'][number]

interface GigCardProps {
	gig: Gig
	showFeaturedBadge?: boolean
}

function formatPrice(gig: Gig): string {
	const symbol = gig.currency === 'USD' ? '$' : gig.currency || '$'

	if (gig.pricingType === 'fixed' && gig.price != null) {
		return `${symbol}${gig.price.toLocaleString()}`
	}

	return `${symbol}${gig.priceFrom?.toLocaleString()} – ${symbol}${gig.priceTo?.toLocaleString()}`
}

export function GigCard({ gig, showFeaturedBadge = true }: GigCardProps) {
	const [hovered, setHovered] = useState(false)

	return (
		<Card
			fillWidth
			background="page"
			border="neutral-alpha-weak"
			radius="m-4"
			padding="24"
			transition="micro-medium"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			style={{
				height: '100%',
				boxShadow: hovered
					? '0 20px 50px -15px rgba(0, 0, 0, 0.15)'
					: '0 10px 35px -15px rgba(0, 0, 0, 0.08)',
				transform: hovered ? 'translateY(-4px)' : 'none',
				border: hovered
					? '1px solid var(--neutral-alpha-medium)'
					: '1px solid var(--neutral-alpha-weak)',
			}}>
			<Column
				fillWidth
				gap="m"
				style={{ height: '100%' }}>
				<Row
					fillWidth
					vertical="center"
					style={{ minHeight: '28px' }}>
					{showFeaturedBadge && gig.featured && (
						<Badge
							background="brand-alpha-weak"
							paddingX="12"
							paddingY="4"
							onBackground="brand-strong"
							textVariant="label-default-s"
							arrow={false}>
							Featured
						</Badge>
					)}
				</Row>

				<Row
					fillWidth
					gap="m"
					horizontal="between"
					vertical="start">
					<Heading
						as="h3"
						variant="heading-strong-l"
						wrap="balance"
						style={{ flex: 1, minWidth: 0 }}>
						{gig.title}
					</Heading>
					<Column
						gap="xs"
						horizontal="end"
						style={{ flexShrink: 0, textAlign: 'right' }}>
						<Text
							variant="heading-strong-m"
							onBackground="brand-strong"
							style={{ whiteSpace: 'nowrap' }}>
							{formatPrice(gig)}
						</Text>
						<Text
							variant="label-default-s"
							onBackground="neutral-weak"
							style={{ whiteSpace: 'nowrap' }}>
							{gig.deliveryTime}
						</Text>
					</Column>
				</Row>

				<Column
					fillWidth
					gap="m"
					style={{ flex: 1 }}>
					<Text
						variant="body-default-s"
						onBackground="neutral-weak"
						wrap="balance">
						{gig.shortDescription}
					</Text>

					<Row
						gap="8"
						wrap>
						{gig.technologies.map((tech) => (
							<Badge
								key={tech}
								background="neutral-alpha-weak"
								paddingX="8"
								paddingY="4"
								onBackground="neutral-strong"
								textVariant="label-default-xs"
								arrow={false}>
								{tech}
							</Badge>
						))}
					</Row>
				</Column>

				<Row
					fillWidth
					horizontal="end"
					paddingTop="8">
					<Button
						variant="primary"
						size="m"
						href={
							gig.contactLink ||
							`mailto:?subject=Inquiry: ${gig.title}`
						}
						arrowIcon>
						Hire for this gig
					</Button>
				</Row>
			</Column>
		</Card>
	)
}
