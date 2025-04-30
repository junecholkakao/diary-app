<script>
  import Icon from '@iconify/svelte'
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { diaries } from '$lib/store/store';

  const {id} = $page.params
  
  const diary = $diaries.find(item => item.id === Number(id))
  console.log(diary)
</script>

<main>
  <h1>보기 {id}</h1>
  <div class="diary">
    <p class="content">{diary.content}</p>
    <div class="bottom-info">
      <span class="date">{diary.date}</span>
      <div class="btns">
        <button class="btn" aria-label="edit">
          <Icon icon="uil:pen" width="24" height="24" />
        </button>
        <button class="btn" aria-label="delete">
          <Icon icon="ic:baseline-delete" width="24" height="24" style="color: #f80" />
        </button>
      </div>
    </div>
  </div>
</main>