<script>
  import Icon from "@iconify/svelte";
  import { goto, invalidate, invalidateAll } from "$app/navigation";
	import { deleteDiary } from "$lib/store/store";
	import { toast } from "svelte-sonner";
  import { page } from "$app/state";

  export let diary_id=''
  export let show_edit = true
  export let show_delete = true

  let showModal = false

  async function deleteHandler(id) {
    const success = await deleteDiary(diary_id)
    if(success) {
      toast.success('삭제 성공')
    } else {
      toast.error('삭제 실패')
    }
    showModal=false
    // if (page.url.pathname === "/")
    //   location.reload()
    // else
    //   goto('/')
    location.href = '/'
  } 
</script>

<div class="btns">
  {#if show_edit}
  <button class="btn" aria-label="edit" onclick={()=>goto(`/edit/${diary_id}`)}>
    <Icon icon="uil:pen" width="24" height="24" />
  </button>
  {/if}
  {#if show_delete}
  <button class="btn" aria-label="delete" 
    onclick={()=>{
      showModal=true
      }}>
    <Icon icon="ic:baseline-delete" width="24" height="24" style="color: #f80" />
  </button>
    {#if showModal}
    <div class="modal-bg">
      <div class="modal-content">
        <h1>삭제 확인</h1>
        <p>삭제하시겠습니까?</p>
        <div class="btns">
          <button class="btn" onclick={deleteHandler}>확인</button>
          <button class="btn" onclick={()=>showModal=false}>취소</button>
        </div>
      </div>
    </div>
    {/if}
  {/if}
</div>

<style lang="scss">
  .modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    display: grid;
    place-items: center;
    text-align: center;

    .modal-content {
      background: #fff;
      width: 400px;
      padding: 20px;
      border-radius: 30px;
      border: 10px solid #000;
      h1 { margin-bottom: 5px; }
      p {
        font-size: 20px;
        color: #666;        
      }
      .btns {
        display: flex;
        gap: 4rem;
        justify-content: center;
        margin-top: 20px;
        .btn { 
          font-size: 24px; 
        }
      }
    }

  }
</style>