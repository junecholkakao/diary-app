<script>
  import Icon from '@iconify/svelte'
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { diaries } from '$lib/store/store';
	import Btns from '$lib/components/Btns.svelte';

  const {id} = $page.params
  
  const diary = $diaries.find(item => item.id === Number(id))
  console.log(diary)
</script>

<main>
  <div class="diary">
    <p class="content">{diary.content}</p>
    <div class="bottom-info">
      <span class="date">{diary.date}</span>
      <Btns diary_id={diary.id}/>
    </div>
  </div>
</main>