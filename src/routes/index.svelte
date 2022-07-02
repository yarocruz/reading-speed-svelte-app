<script>
	let paragraph = `The rabbit-hole went straight on like a tunnel for some way, and then 
	dipped suddenly down, so suddenly, that Alice had not a moment to think about stopping 
	herself, before she found herself falling down what seemed a deep well. Either the well
	was very deep, or she fell very slowly, for she had plenty of time as she went down to 
	look about her, and to wonder what would happen next. First, she tried to look down 
	and make out what she was coming to, but it was too dark to see anything: then, she 
	looked at the sides of the well, and noticed that they were filled with cupboards and 
	book-shelves: here and there were maps and pictures hung on pegs. She took a jar down 
	off one of the shelves as she passed: it was labelled[3] "Orange Marmalade," but to her 
	great disappointment it was empty: she did not like to drop the jar, for fear of killing
	somebody underneath, so managed to put it into one of the cupboards as she fell past it.
	"Well!" thought Alice to herself, "after such a fall as this, I shall think nothing of 
	tumbling down stairs! How brave they'll all think me at home! Why, I wouldn't say anything
	about it, even if I fell off the top of the house!" (which was most likely true.)
	Down, down, down. Would the fall never come to an end? "I wonder how many miles I've 
	fallen by this time?" she said aloud, "I must be getting somewhere near the centre of 
	the earth. Let me see: that would be four thousand miles down, I think—" (for you see 
	Alice had learnt several things of this sort in her lessons in the schoolroom, and though
	this was not a very good opportunity of showing off her knowledge, as there was no one
	to hear her, still it was good practice to say it over,) "yes that's the right distance,
	 but then what Longitude or Latitude-line shall I be in?"`;

	let words = paragraph.split(' ');

	let isReading = false;
	let id = 0;
	let selected;

	// wpm speeds
	let words_per_minute = [
		{ id: 1, wpm: 400, speed: 100 },
		{ id: 2, wpm: 350, speed: 150 },
		{ id: 3, wpm: 300, speed: 200 },
		{ id: 4, wpm: 250, speed: 250 },
		{ id: 5, wpm: 200, speed: 300 },
		{ id: 6, wpm: 150, speed: 350 },
		{ id: 7, wpm: 100, speed: 400 }
	];
	let readingSpeed = 150;

	function changeSpeed(e) {
		readingSpeed = e.target.value;
	}

	function startReading() {
		isReading = !isReading;

		let myInterval = setInterval(() => {
			if (id < words.length - 1 && isReading) {
				id += 1;
				console.log(words[id], id);
			} else {
				clearInterval(myInterval);
				isReading = false;
				id = 0;
			}
		}, readingSpeed);
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

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

	<button class="btn" on:click={startReading}> {!isReading ? 'Start' : 'Stop'} Reading </button>
	<p>Select a Reading Speed</p>
	{#if !isReading}
	<select bind:value={selected} on:change={(e) => changeSpeed(e)}>
		{#each words_per_minute as option}
			<option value={option.speed}>{option.wpm} WPM</option>
		{/each}
	</select>
	{:else}
	<select bind:value={selected} disabled on:change={(e) => changeSpeed(e)}>
		{#each words_per_minute as option}
			<option value={option.speed}>{option.wpm} WPM</option>
		{/each}
	</select>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	.reading-content {
		max-width: 600px;
		font-size: large;
		line-height: 1.7em;
	}

	.fade-text {
		color: rgb(193, 192, 192);
	}

	.highlight-text {
		font-size: 18px;
		color: black;
		padding: 2px 2px;
	}

	select {
		padding: 5px 5px;
	}

	.btn {
		font-weight: 900;
		color: white;
		background-color: #ff3e00;
		padding: 10px 15px;
		border-radius: 6px;
		border: none;
	}

	.btn:hover {
		background-color: #f07248;
	}
</style>
