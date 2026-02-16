<template>
	<UPageSection
		id="stack"
		title="My Current Stack"
		description="Technologies I consistently use to deliver clean architecture, efficient code, and scalable web applications."
		orientation="horizontal"
		:ui="{ root: 'bg-neutral-900 ', container: 'items-start!' }">
		<template #links>
			<UDrawer>
				<UButton label="View All Skills" variant="subtle" />

				<template #body>
					<UPageLogos
						title="My Skills"
						:items="skills"
						marquee
						:ui="{
							logos: 'pb-16',
							logo: 'size-24',
						}" />
				</template>
			</UDrawer>
		</template>

		<div class="ml-auto max-w-md">
			<h3 class="text-2xl font-bold">How I Apply My Stack</h3>

			<div class="mt-8 space-y-8">
				<UPageFeature
					title="Interactive Experiences"
					description="Build web tools, dashboards, and editors that are intuitive and user-friendly."
					icon="hugeicons:computer-programming-02" />

				<UPageFeature
					title="Performance & Maintainability"
					description="Focus on clean architecture, fast load times, and scalable, maintainable code."
					icon="hugeicons:zap" />

				<UPageFeature
					title="Scalable Solutions"
					description="Deliver full-stack systems that handle growth and complexity with ease."
					icon="hugeicons:chart-up" />
			</div>
		</div>
	</UPageSection>

	<UPageSection
		:ui="{
			root: 'bg-linear-to-t from-neutral-800 to-neutral-900 from-70% to-70%',
			container: 'pt-0!',
		}">
		<UPageGrid class="mx-auto">
			<UPageCard
				v-for="(card, index) in cards"
				:key="index"
				v-bind="card"
				spotlight
				reverse
				:ui="{
					container: 'aspect-square',
					title: 'text-xl',
					leading: 'hidden',
				}">
				<UIcon :name="card.icon" class="text-primary mb-4 size-20" />
			</UPageCard>
		</UPageGrid>
	</UPageSection>
</template>

<script lang="ts" setup>
	import type { PageCardProps, PageLogosProps } from "@nuxt/ui";

	const cards: PageCardProps[] = [
		{
			title: "NuxtJS",
			description: "3 years",
			icon: "logos:nuxt-icon",
		},
		{
			title: "NestJS",
			description: "2 years",
			icon: "logos:nestjs",
		},
		{
			title: "PostgreSQL",
			description: "2 years",
			icon: "logos:postgresql",
		},
	];

	const skills: PageLogosProps["items"] = [
		"logos:nuxt-icon",
		"logos:nestjs",
		"logos:postgresql",
		"logos:typescript-icon",
		"logos:vue",
		"logos:tailwindcss-icon",
		"logos:laravel",
		"logos:mysql",
		"logos:javascript",
		"logos:php",
		"logos:docker-icon",
	];
</script>
