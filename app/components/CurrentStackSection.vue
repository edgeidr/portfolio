<template>
	<UPageSection
		id="stack"
		title="My Current Stack"
		description="Technologies I consistently use to deliver clean architecture, efficient code, and scalable web applications."
		orientation="horizontal"
		:ui="{
			root: 'bg-neutral-900 ',
			container: 'items-start!',
			title: 'fade-up',
			description: 'fade-up',
			links: 'fade-up',
		}">
		<template #links>
			<UDrawer title="My Skills" :ui="{ title: 'text-center' }">
				<UButton label="View All Skills" variant="subtle" />

				<template #body>
					<UMarquee class="mt-10 mb-16">
						<UTooltip v-for="skill in skills" :text="skill.name" :delayDuration="0">
							<Icon :name="skill.icon" class="size-24" />
						</UTooltip>
					</UMarquee>
				</template>
			</UDrawer>
		</template>

		<div class="ml-auto max-w-md">
			<h3 class="fade-up text-2xl font-bold">How I Apply My Stack</h3>

			<div class="mt-8 space-y-8">
				<UPageFeature
					title="Interactive Experiences"
					description="Build web tools, dashboards, and editors that are intuitive and user-friendly."
					icon="hugeicons:computer-programming-02"
					:ui="{ root: 'fade-up' }" />

				<UPageFeature
					title="Performance & Maintainability"
					description="Focus on clean architecture, fast load times, and scalable, maintainable code."
					icon="hugeicons:zap"
					:ui="{ root: 'fade-up' }" />

				<UPageFeature
					title="Scalable Solutions"
					description="Deliver full-stack systems that handle growth and complexity with ease."
					icon="hugeicons:chart-up"
					:ui="{ root: 'fade-up' }" />
			</div>
		</div>
	</UPageSection>

	<UPageSection
		:ui="{
			root: 'bg-linear-to-t from-neutral-800 to-neutral-900 from-70% to-70%',
			container: 'pt-0!',
		}">
		<UPageGrid class="fade-up-stagger mx-auto">
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
	import type { PageCardProps } from "@nuxt/ui";

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

	const skills: { name: string; icon: string }[] = [
		{ name: "NuxtJS", icon: "logos:nuxt-icon" },
		{ name: "NestJS", icon: "logos:nestjs" },
		{ name: "PostgreSQL", icon: "logos:postgresql" },
		{ name: "TypeScript", icon: "logos:typescript-icon" },
		{ name: "VueJS", icon: "logos:vue" },
		{ name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
		{ name: "Laravel", icon: "logos:laravel" },
		{ name: "MySQL", icon: "logos:mysql" },
		{ name: "JavaScript", icon: "logos:javascript" },
		{ name: "PHP", icon: "logos:php" },
		{ name: "Docker", icon: "logos:docker-icon" },
	];
</script>
