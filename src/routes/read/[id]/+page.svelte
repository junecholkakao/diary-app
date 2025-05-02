<script>
  import Icon from '@iconify/svelte'
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { diaries } from '$lib/store/store';
	import Btns from '$lib/components/Btns.svelte';
	import { formatDate } from '$lib/utils/formatDate.js';

  // const {id} = $page.params
  // const diary = $diaries.find(item => item.id === Number(id))
  
  export let data
  const diary = data.diary
  console.log(diary)
  
</script>

{#if diary}
<main>
  <div class="diary">
    <p class="content">{diary.content}</p>
    <div class="bottom-info">
      <span class="date">{formatDate(diary.created_at)}</span>
      <Btns diary_id={diary.id}/>
    </div>
  </div>
</main>
{/if}