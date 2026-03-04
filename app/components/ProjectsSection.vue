<template>
	<UPageSection
		id="projects"
		title="Featured Projects"
		description="Real-word applcations built with modern full-stack technologies and clean, scalable achitecture."
		:ui="{ root: 'bg-neutral-900' }"
		:links="[
			{
				label: 'View Project Archive',
				trailingIcon: 'hugeicons:arrow-right-02',
				variant: 'link',
			},
		]">
		<template #features>
			<UPageCard
				v-for="(project, index) in projects"
				:key="index"
				v-bind="project"
				spotlight
				reverse
				:ui="{
					container: 'p-0! relative h-64 items-end',
					wrapper: 'p-4 sm:p-6 z-10',
					footer: 'w-full',
				}">
				<template #footer>
					<div class="flex justify-between gap-4">
						<div class="flex gap-2">
							<UTooltip text="GitHub Repository">
								<UButton
									variant="subtle"
									color="neutral"
									icon="hugeicons:github"
									:ui="{ leadingIcon: 'size-4' }" />
							</UTooltip>

							<UButton
								icon="hugeicons:link-square-02"
								label="Live Demo"
								variant="subtle"
								:ui="{ leadingIcon: 'size-4' }" />
						</div>
					</div>
				</template>

				<div
					class="absolute inset-0 z-1 rounded-lg bg-linear-to-t from-black/90 to-transparent"></div>

				<img
					:src="project.image"
					class="absolute inset-0 size-full rounded-lg object-cover" />
			</UPageCard>
		</template>
	</UPageSection>
</template>

<script setup lang="ts">
	import type { PageCardProps } from "@nuxt/ui";

	const projects: (PageCardProps & { tags: string[]; image: string })[] = [
		{
			title: "BEAT",
			description:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, expedita.",
			tags: ["NuxtJS", "NestJS", "PostgreSQL"],
			image: "https://images.unsplash.com/photo-1760536928911-40831dacdbc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwbGFwdG9wJTIwY29kaW5nfGVufDF8fHx8MTc3MDc5MTY1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		},
		{
			title: "Leadr",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, temporibus.",
			tags: ["NuxtJS", "NestJS", "PostgreSQL"],
			image: "https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzcwNzkxNjUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		},
		{
			title: "Bookie",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, quos.",
			tags: ["NuxtJS", "NestJS", "PostgreSQL"],
			image: "https://images.unsplash.com/photo-1760536928911-40831dacdbc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwbGFwdG9wJTIwY29kaW5nfGVufDF8fHx8MTc3MDc5MTY1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		},
	];
</script>
