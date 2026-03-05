<template>
	<UPageSection
		id="contact"
		description="I’m excited to bring your ideas to life. Reach out and let’s make something great together."
		orientation="horizontal"
		:ui="{ container: 'items-start!', title: 'fade-up', description: 'fade-up' }">
		<template #title>
			<span class="block">Got Ideas?</span>
			<span class="block">Let’s Collaborate</span>
		</template>

		<UForm :state="form" class="space-y-4">
			<div class="columns-2">
				<UFormField label="Your Name" name="name" class="fade-up">
					<UInput v-model="form.name" class="w-full" />
				</UFormField>

				<UFormField label="Email Address" name="email" class="fade-up">
					<UInput v-model="form.email" type="email" class="w-full" />
				</UFormField>
			</div>

			<UFormField label="Message" name="message" class="fade-up">
				<UTextarea
					v-model="form.message"
					placeholder="Tell me about your great idea"
					class="w-full"
					:rows="10" />
			</UFormField>

			<UButton label="Send Message" type="submit" icon="hugeicons:sent" class="fade-up" />
		</UForm>
	</UPageSection>
</template>

<script setup lang="ts">
	const form = reactive({
		name: "",
		email: "",
		message: "",
	});
</script>
