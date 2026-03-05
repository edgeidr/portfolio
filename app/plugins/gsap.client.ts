import { defineNuxtPlugin } from "#app";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.hook("app:mounted", () => {
		gsap.utils.toArray(".fade-up").forEach((el: Element) => {
			gsap.from(el, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
					toggleActions: "play none none reverse",
				},
				autoAlpha: 0,
				y: 50,
			});
		});

		gsap.utils.toArray(".fade-up-stagger").forEach((el: Element) => {
			gsap.from(el.children, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
					toggleActions: "play none none reverse",
				},
				autoAlpha: 0,
				y: 50,
				stagger: 0.2,
			});
		});

		gsap.utils.toArray(".fade-left-stagger").forEach((el: Element) => {
			gsap.from(el.children, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
					toggleActions: "play none none reverse",
				},
				autoAlpha: 0,
				x: 50,
				stagger: 0.2,
			});
		});

		gsap.utils.toArray(".fade-scale").forEach((el: Element) => {
			gsap.from(el.children, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
					toggleActions: "play none none reverse",
				},
				autoAlpha: 0,
				scale: 0.5,
			});
		});
	});
});
