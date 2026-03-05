<template>
	<UPageHero
		ref="sectionRef"
		:ui="{
			container: '',
			headline: 'text-secondary',
		}"
		title="Ian Del Rosario"
		headline="Full Stack Developer"
		description="I build robust, scalable, and user-centric web solutions designed for performance, maintainability, and real-world impact."
		orientation="horizontal"
		:links="links">
		<div class="fade-scale">
			<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
				<path
					fill="currentColor"
					d="M42.7,-76.4C52.7,-68.1,56.5,-51.5,63.3,-37.3C70.1,-23.2,79.8,-11.6,80.9,0.6C82,12.8,74.4,25.7,64.1,33.7C53.8,41.7,40.8,45,29.7,52.9C18.5,60.8,9.3,73.5,-0.6,74.6C-10.5,75.7,-21.1,65.3,-35.3,59.1C-49.5,53,-67.4,51.1,-76.2,42C-85,32.9,-84.6,16.4,-82.2,1.3C-79.9,-13.7,-75.6,-27.5,-66.1,-35.2C-56.6,-43,-41.7,-44.8,-29.8,-52C-17.9,-59.2,-9,-71.8,3.7,-78.2C16.3,-84.5,32.6,-84.6,42.7,-76.4Z"
					transform="translate(100 100)" />
			</svg>
		</div>
	</UPageHero>
</template>

<script setup lang="ts">
	import type { ButtonProps } from "@nuxt/ui";

	let sectionCtx: gsap.Context;
	const sectionRef = useTemplateRef("sectionRef");
	const links: ButtonProps[] = [
		{
			label: "View My Work",
			trailingIcon: "hugeicons:arrow-right-02",
			to: "#projects",
			ui: { trailingIcon: "transition-all group-hover:translate-x-1" },
			class: "group",
		},
		{
			label: "Let's Collaborate",
			variant: "subtle",
			to: "#contact",
		},
	];

	onMounted(() => {
		sectionCtx = useGSAP().context(() => {
			const targets = [
				"[data-slot='headline']",
				"[data-slot='title']",
				"[data-slot='description']",
				"[data-slot='links']>*",
			];

			useGSAP().from(targets, {
				autoAlpha: 0,
				x: -50,
				stagger: 0.2,
			});
		}, sectionRef.value?.$el);
	});

	onUnmounted(() => {
		sectionCtx.revert();
	});
</script>
