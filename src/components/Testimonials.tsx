'use client'

import { Avatar, Card, Column, Heading, Row, Text } from '@once-ui-system/core'
import type { Testimonials } from '@/types'
import { useState } from 'react'
import { iconLibrary } from '@/resources/icons'

export type TestimonialsProps = {
	items: Testimonials['feedbacks']
	title?: string
	description?: string
}

export function Testimonials({
	items,
	title = 'Testimonials',
	description,
}: TestimonialsProps) {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

	if (!items || items.length === 0) {
		return null
	}

	return (
		<Column
			as="section"
			aria-labelledby="testimonials-heading"
			fillWidth
			gap="l"
			paddingX="m"
			paddingY="xl">
			{/* Header */}
			<Column
				gap="8"
				as="header"
				style={{ alignItems: 'center', textAlign: 'center' }}>
				<Heading
					as="h2"
					id="testimonials-heading"
					variant="heading-strong-xl">
					{title}
				</Heading>
				<Text
					variant="body-default-s"
					onBackground="neutral-weak"
					style={{ maxWidth: '620px' }}>
					{description ||
						'Feedback from collaborators and teammates who value reliable engineering and strong collaboration.'}
				</Text>
			</Column>

			{/* Grid de Testimonials */}
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
					gap: '32px',
					width: '100%',
					justifyContent: 'center',
					marginTop: '32px',
				}}>
				{items.map((item, index) => (
					<Card
						key={`${item.name}-${index}`}
						as="article"
						direction="column"
						fillWidth
						radius="xl"
						border="neutral-alpha-weak"
						background="surface"
						padding="8"
						style={{
							minWidth: 0,
							transition:
								'all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)',
							transform:
								hoveredIndex === index
									? 'translateY(-12px)'
									: 'none',
							boxShadow:
								hoveredIndex === index
									? '0 25px 60px -15px rgba(0, 0, 0, 0.18)'
									: '0 10px 35px -15px rgba(0, 0, 0, 0.08)',
							border:
								hoveredIndex === index
									? '1px solid var(--neutral-alpha-medium)'
									: '1px solid var(--neutral-alpha-weak)',
						}}
						onMouseEnter={() => setHoveredIndex(index)}
						onMouseLeave={() => setHoveredIndex(null)}>
						<Column
							gap={2}
							fillWidth
							style={{
								alignItems: 'end',
								justifyItems: 'space-between',
								flex: 1,
							}}>
							<iconLibrary.Quotes
								size={48}
								style={{
									color: 'var(--neutral-alpha-medium)',
									opacity: 0.75,
								}}
							/>

							<Text
								as="blockquote"
								variant="body-default-s"
								onBackground="neutral-strong"
								style={{
									lineHeight: '1.8',
									fontStyle: 'italic',
									paddingLeft: '8px',
									borderLeft:
										'3px solid var(--neutral-alpha-medium)',
								}}>
								{item.message}
							</Text>

							<Row
								vertical="center"
								gap="16"
								fillWidth
								style={{ marginTop: 'auto' }}>
								<Avatar
									src={item.image}
									size="l"
									style={{
										border: '2.5px solid var(--neutral-alpha-weak)',
									}}
								/>
								<Column gap="2">
									<Text variant="label-strong-m">
										{item.name}
									</Text>
									<Text
										variant="body-default-xs"
										onBackground="neutral-weak">
										{item.job}
									</Text>
								</Column>
							</Row>
						</Column>
					</Card>
				))}
			</div>
		</Column>
	)
}
