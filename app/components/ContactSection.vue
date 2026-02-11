<template>
	<UPageSection
		id="contact"
		description="I’m excited to bring your ideas to life. Reach out and let’s make something great together."
		orientation="horizontal"
		:ui="{ container: 'items-start!' }">
		<template #title>
			<span class="block">Got Ideas?</span>
			<span class="block">Let’s Collaborate</span>
		</template>

		<UForm :state="form" class="space-y-4">
			<div class="columns-2">
				<UFormField label="Your Name" name="name">
					<UInput v-model="form.name" class="w-full" />
				</UFormField>

				<UFormField label="Email Address" name="email">
					<UInput v-model="form.email" type="email" class="w-full" />
				</UFormField>
			</div>

			<UFormField label="Message" name="message">
				<UTextarea
					v-model="form.message"
					placeholder="Tell me about your great idea"
					class="w-full"
					:rows="10" />
			</UFormField>

			<UButton label="Send Message" type="submit" icon="hugeicons:sent" />
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
