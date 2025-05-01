<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { addDiary, updateDiary } from '$lib/store/store';

	let path
	$: {
		path = $page.url.pathname;
	}

  function doneHandler() {
    if (path.startsWith('/read')){
      goto('/')
    }
    else if (path.startsWith('/write')){
      // 글쓰기
      addDiary()
      goto('/')
    }
    else if (path.startsWith('/edit')){
			const id = path.split('/').pop()
      updateDiary(id)
      goto('/')
    }
  }

  

</script>

<header>
	<h1>{
		(path.startsWith('/read')) ? '읽기' 
		: (path.startsWith('/write')) ? '쓰기'
		: (path.startsWith('/edit')) ? '수정하기'  
		: 'Diary'}</h1>
	{#if path !== '/'}
		<button class="btn" on:click={doneHandler}>완료</button>
	{/if}
</header>

<!-- <nav>
	<a href="/">홈</a>
	<a href="/read">읽기</a>
	<a href="/write">쓰기</a>
	<a href="/edit">수정하기</a>
</nav> -->

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		padding: 20px;
		background: var(--main-color);
		color: var(--text-light);
		h1 {
			font-size: 28px;
		}
		.btn {
			border: none;
			background: transparent;
			color: var(--text-light);
			font-size: 18px;
			cursor: pointer;
		}
	}
</style>
