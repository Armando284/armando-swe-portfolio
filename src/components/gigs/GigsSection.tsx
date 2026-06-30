import {
	Button,
	Column,
	Grid,
	Heading,
	Line,
	Row,
	Text,
} from '@once-ui-system/core'
import { gigs } from '@/resources'
import { GigCard } from '@/components/gigs/GigCard'

interface GigsSectionProps {
	range?: [number, number?]
	featuredOnly?: boolean
	limit?: number
	columns?: '1' | '2'
	variant?: 'page' | 'homepage'
}

export function GigsSection({
	range,
	featuredOnly = false,
	limit,
	columns = '2',
	variant = 'page',
}: GigsSectionProps) {
	let displayGigs = featuredOnly
		? gigs.items.filter((gig) => gig.featured)
		: gigs.items

	if (range) {
		displayGigs = displayGigs.slice(
			range[0] - 1,
			range[1] ?? displayGigs.length,
		)
	}

	if (limit != null) {
		displayGigs = displayGigs.slice(0, limit)
	}

	if (displayGigs.length === 0) {
		return null
	}

	const grid = (
		<Grid
			columns={columns}
			s={{ columns: 1 }}
			fillWidth
			gap="24">
			{displayGigs.map((gig) => (
				<GigCard
					key={gig.slug}
					gig={gig}
					showFeaturedBadge={!featuredOnly}
				/>
			))}
		</Grid>
	)

	if (variant === 'homepage') {
		return (
			<Column
				as="section"
				aria-labelledby="gigs-heading"
				fillWidth
				gap="24"
				marginBottom="l">
				<Row
					fillWidth
					paddingRight="64">
					<Line maxWidth={48} />
				</Row>
				<Row
					fillWidth
					gap="24"
					marginTop="40"
					s={{ direction: 'column' }}>
					<Row
						flex={1}
						paddingLeft="l"
						paddingTop="24">
						<Column gap="8">
							<Heading
								as="h2"
								id="gigs-heading"
								variant="display-strong-xs"
								wrap="balance">
								{gigs.label}
							</Heading>
							<Text
								variant="body-default-s"
								onBackground="neutral-weak"
								wrap="balance">
								{gigs.description}
							</Text>
						</Column>
					</Row>
					<Column
						flex={3}
						paddingX="20"
						gap="24">
						{grid}
						<Row
							fillWidth
							horizontal="end">
							<Button
								href={gigs.path}
								variant="secondary"
								size="m"
								arrowIcon>
								View All Gigs
							</Button>
						</Row>
					</Column>
				</Row>
				<Row
					fillWidth
					paddingLeft="64"
					horizontal="end">
					<Line maxWidth={48} />
				</Row>
			</Column>
		)
	}

	return (
		<Column
			fillWidth
			gap="24"
			marginBottom="40"
			paddingX="l">
			{grid}
		</Column>
	)
}
