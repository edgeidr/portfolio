<template>
	<UApp>
		<UHeader class="absolute w-full bg-neutral-800">
			<template #title>
				<img src="~/assets/images/edge-logo-transparent.png" class="h-8 w-auto" />
			</template>

			<template #right>
				<UButton
					v-for="(navigation, index) in navigationLinks"
					:key="index"
					:label="navigation.label"
					variant="link"
					color="neutral"
					:to="navigation.link" />
			</template>
		</UHeader>

		<UMain class="bg-neutral-800">
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</UMain>

		<UFooter class="bg-neutral-800 py-10">
			<div class="text-center">
				<div>
					<UButton
						v-for="(social, index) in socials"
						:key="index"
						:icon="social.icon"
						variant="link"
						color="neutral"
						:to="social.link"
						target="_blank" />
				</div>

				<p class="text-muted mt-8 text-xs">
					© {{ currentYear }} Ian Del Rosario. All rights reserved.
				</p>
			</div>
		</UFooter>
	</UApp>
</template>

<script setup lang="ts">
	const currentYear = new Date().getFullYear();
	const navigationLinks: { label: string; link: string }[] = [
		{ label: "Stack", link: "#stack" },
		{ label: "Experience", link: "#experience" },
		{ label: "Projects", link: "#projects" },
	];
	const socials: { icon: string; link: string }[] = [
		{
			icon: "hugeicons:github-01",
			link: "https://github.com/edgeidr",
		},
		{
			icon: "hugeicons:linkedin-01",
			link: "https://www.linkedin.com/in/ian-del-rosario-a03025183/",
		},
		{
			icon: "hugeicons:facebook-01",
			link: "https://www.facebook.com/ian.delrosario.19",
		},
	];
</script>
