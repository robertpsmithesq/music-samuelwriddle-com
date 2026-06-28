<script lang="ts">
	type Props = {
		title: string;
		year?: string;
	};

	let { title, year = '2026' }: Props = $props();
</script>

<footer class="border-t border-white/10 px-4 py-8 md:px-8">
	<div class="mx-auto max-w-5xl text-center">
		<p class="text-faint text-sm">© {year} {title}</p>
	</div>
</footer>
