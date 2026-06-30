import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, gigs } from "@/resources";
import { GigsSection } from "@/components/gigs/GigsSection";

export async function generateMetadata() {
  return Meta.generate({
    title: gigs.title,
    description: gigs.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(gigs.title)}`,
    path: gigs.path,
  });
}

export default function Gigs() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={gigs.path}
        title={gigs.title}
        description={gigs.description}
        image={`/api/og/generate?title=${encodeURIComponent(gigs.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {gigs.title}
      </Heading>
      <GigsSection />
    </Column>
  );
}
