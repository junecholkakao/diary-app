<script>
	import TextAreaAutosize from "$lib/components/TextAreaAutosize.svelte";
	import { writing } from "$lib/store/store";
  import { formatDate } from "$lib/utils/formatDate";
  import autosize from "svelte-autosize";

  let textarea
  let val=''

  $: {
    $writing = val
    autosize.update(textarea)
  }
</script>

<main>
  <div class="diary">
    <textarea 
      use:autosize
      bind:this={textarea}
      bind:value={val}  
      placeholder="글쓰기를 시작하세요..."
    ></textarea>
    <div class="bottom-info">
      <span class="date">{formatDate()}</span>
    </div>
  </div>
</main>
