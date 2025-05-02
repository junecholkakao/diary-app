<script>
	// import TextAreaAutosize from "$lib/components/TextAreaAutosize.svelte";
  import Icon from "@iconify/svelte";
	import { writing } from "$lib/store/store";
  import { formatDate } from "$lib/utils/formatDate";
  import { diaries } from "$lib/store/store";
  import { page } from "$app/stores";
	import Btns from "$lib/components/Btns.svelte";
  import autosize from 'svelte-autosize'

  // console.log($page)
  // const id = $page.params.id
  // const diary = $diaries.find(item=>item.id === Number(id))
  
  export let data
  const diary = data.diary
  console.log(diary)

  let val=diary.content
  console.log(val)

  let textarea
  $: {
    $writing = val
    autosize.update(textarea)
  }
</script>

<main>
  <div class="diary">
    <textarea 
      use:autosize
      bind:value={val}  
      bind:this={textarea}
    ></textarea>
    <div class="bottom-info">
      <span class="date">{formatDate(diary.created_at)}</span>
      <Btns diary_id={diary.id} show_edit={false}/>
    </div>
  </div>
</main>