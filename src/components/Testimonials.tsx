import { Avatar, Card, Column, Heading, Row, Text } from '@once-ui-system/core'
import type { Testimonials } from '@/types'

export type TestimonialsProps = {
	/** Feedback items to render in the section */
	items: Testimonials['feedbacks']
	/** Section headline shown above the list */
	title?: string
	/** Optional section description text */
	description?: string
}

export function Testimonials({
	items,
	title = 'Client & Team Feedback',
	description,
}: TestimonialsProps) {
	if (!items.length) {
		return null
	}

	return (
		<Column
			as="section"
			aria-labelledby="testimonials-heading"
			fillWidth
			gap="l"
			padding="0">
			<Column
				gap="8"
				as="header">
				<Heading
					as="h2"
					id="testimonials-heading"
					variant="heading-strong-xl">
					{title}
				</Heading>
				{description ? (
					<Text
						variant="body-default-s"
						onBackground="neutral-weak">
						{description}
					</Text>
				) : (
					<Text
						variant="body-default-s"
						onBackground="neutral-weak">
						Real feedback from collaborators and teammates who value
						thoughtful engineering and strong product focus.
					</Text>
				)}
			</Column>

			<Row
				fillWidth
				gap="24"
				wrap>
				{items.map((item) => (
					<Card
						key={`${item.name}-${item.job}`}
						as="article"
						direction="column"
						fillWidth
						radius="l-4"
						border="neutral-alpha-weak"
						background="surface"
						shadow="micro"
						padding="6"
						style={{
							minWidth: 0,
							flex: '1 1 min(100%, 520px)',
							maxWidth: '520px',
						}}>
						<Column
							gap="16"
							fillWidth>
							<Row
								vertical="center"
								gap="16">
								<Avatar
									src={item.image}
									alt={`${item.name} profile picture`}
									size="m"
								/>
								<Column gap="4">
									<Text variant="label-strong-s">
										{item.name}
									</Text>
									<Text
										variant="body-default-xs"
										onBackground="neutral-weak">
										{item.job}
									</Text>
								</Column>
							</Row>

							<Text
								as="blockquote"
								variant="body-default-s"
								onBackground="neutral-strong">
								{item.message}
							</Text>
						</Column>
					</Card>
				))}
			</Row>
		</Column>
	)
}
