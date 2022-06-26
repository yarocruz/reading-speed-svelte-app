<script context="module">
	export const prerender = true;
</script>

<script>
	import Counter from '$lib/Counter.svelte';

	let paragraph =
		'In academic writing, readers expect each paragraph to have a sentence or two that captures its main point. They’re often called “topic sentences,” though many writing instructors prefer to call them “key sentences.” There are at least two downsides of the phrase “topic sentence.” First, it makes it seem like the paramount job of that sentence is simply to announce the topic of the paragraph. Second, it makes it seem like the topic sentence must always be a single grammatical sentence. Calling it a “key sentence” reminds us that it expresses the central idea of the paragraph. And sometimes a question or a two-sentence construction functions as the key.';

	// split paragraph
	let words = paragraph.split(' ');

	let isReading = false;
	let id = 0;

	function handleClick() {
		isReading = !isReading;

		let myInterval = setInterval(() => {
			if (id < words.length - 1) {
				id += 1;
				console.log(words[id], id);
			} else {
				clearInterval(myInterval);
			}
		}, 250);
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />
</section>

<section>
	<p class="reading-content">
		{#each words as word, i}
			{#if isReading && i == id}
				<span id={i.toString()} class="highlight-text">{word} </span>
			{:else if isReading}
				<span class="fade-text">{word} </span>
			{:else}
				<span>{word} </span>
			{/if}
		{/each}
	</p>

	<button on:click={handleClick}> Start reading </button>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	.fade-text {
		color: rgb(223, 223, 223);
	}

	.highlight-text {
		font-size: 20px;
		color: black;
		border: 1px solid black;
		padding: 2px 2px;
	}
</style>
