<script>
	import TextAreaAutosize from "$lib/components/TextAreaAutosize.svelte";
	import { writing } from "$lib/store/store";
  import { formatDate } from "$lib/utils/formatDate";


  let val=''

  $: {
    $writing = val
  }
</script>

<main>
  <div class="diary">
    <TextAreaAutosize 
    bind:value={val}  
    minRows={4}
    maxRows={40}
    />
    <div class="bottom-info">
      <span class="date">{formatDate()}</span>
    </div>
  </div>
</main>

<style lang="scss">
  // .textarea {
  //   border: none;
  //   width: 100%;
  //   font-size: inherit;
  //   padding: 0.5rem 0;
  //   background: transparent;
  //   outline: none;
  // }

</style>