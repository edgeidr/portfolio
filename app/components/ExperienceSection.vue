<template>
	<UPageSection
		id="experience"
		title="Professional Experience"
		description="A timeline of roles where I delivered full-stack solutions with clean architecture and scalable systems."
		orientation="horizontal"
		:ui="{ container: 'items-start!' }">
		<template #links>
			<UButton
				label="Download CV"
				icon="hugeicons:download-01"
				to="/Resume.pdf"
				target="_blank"
				download="Ian-Del-Rosario-CV" />
		</template>

		<UTimeline
			:defaultValue="2"
			:items="experiences"
			:ui="{ separator: 'bg-neutral-900', indicator: 'bg-neutral-900' }"
			reverse>
			<template #title="{ item }">
				<span>{{ item.title }}</span>
				<span> • </span>
				<UButton
					to="https://boldrimpact.com/"
					target="_blank"
					label="Boldr Inc."
					variant="link"
					color="neutral"
					trailingIcon="hugeicons:link-square-02"
					class="p-0"
					:ui="{ trailingIcon: 'size-4' }" />
			</template>

			<template #description="{ item }">
				<p class="mt-2">{{ item.description }}</p>

				<div class="mt-4 flex gap-2">
					<UBadge
						v-for="tag in item.tags"
						:key="tag"
						:label="tag"
						variant="subtle"
						color="secondary"
						class="rounded-full" />
				</div>
			</template>
		</UTimeline>
	</UPageSection>
</template>

<script setup lang="ts">
	import type { TimelineItem } from "@nuxt/ui";

	const experiences: (TimelineItem & { tags?: string[] })[] = [
		{
			title: "Software Development Specialist",
			date: "Feb 2023 - Present",
			description:
				"I develop full-stack applications across multiple stacks, including NuxtJS, NestJS, and PostgreSQL, as well as VueJS, Laravel, and MySQL. I manage version control using Git and GitHub for collaborative workflows. I design and build RESTful APIs and create middleware for webhooks and WebSocket services. Additionally, I integrate third-party software via Open APIs, delivering connected, scalable, and maintainable web applications in production.",
			icon: "hugeicons:tie",
			tags: ["NuxtJS", "NestJS", "PostgreSQL", "TypeScript", "AWS", "Docker"],
		},
		{
			title: "Associate Software Developer",
			date: "Feb 2020 - Feb 2023",
			description:
				"I contributed to full-stack software development using Laravel, transitioning from CodeIgniter to improve application performance. I developed RESTful APIs for web applications and maintained existing CMS websites, ensuring reliability and smooth operation.",
			icon: "hugeicons:source-code",
			tags: ["VueJS", "Laravel", "MySQL", "TailwindCSS", "Git", "CodeIgniter"],
		},
		{
			title: "Front-end Web Developer",
			date: "Feb 2019 - Feb 2020",
			description:
				"I created and managed content for various websites across Squarespace, WordPress, and HubSpot, ensuring each site was accurate, engaging, and up-to-date. I also streamlined content workflows to improve site performance and maintain quality across multiple platforms.",
			icon: "hugeicons:browser",
			tags: ["HTML", "CSS", "JavaScript", "jQuery", "PHP"],
		},
	];
</script>
