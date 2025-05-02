<script>
  // import { diaries } from "$lib/store/store";
  import Icon from "@iconify/svelte";
  import addIcon from '$lib/assets/icon_add.svg'
	import { goto } from "$app/navigation";
	import Btns from "$lib/components/Btns.svelte";
	import { formatDate } from "$lib/utils/formatDate.js";

  // console.log($diaries)

  const list_text_length=50
  export let data
  console.log(data)
  let {diaries} = data 

  
</script>

<main class="container">
  {#each diaries as diary}
  <div class="diary">
    <a href={`/read/${diary.id}`}>
      <p class="content">
        {diary.content.length > list_text_length 
        ? diary.content.slice(0, list_text_length) + "..."
        : diary.content
        }
      </p>
    </a>
    <div class="bottom-info">
      <span class="date">{formatDate(diary.created_at)}</span>
      <Btns diary_id={diary.id}/>
    </div>
  </div>
    
  {/each}
</main>
<a href="/write" class="btn-write">
  <img src={addIcon} alt="">
</a>

<style lang="scss">
  .btn-write {
    position: fixed;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    img {
      width: 64px;
      height: 64px;
    }
  }

</style>