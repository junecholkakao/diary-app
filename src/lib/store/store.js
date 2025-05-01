import { get, writable } from "svelte/store";
import { posts } from "$lib/data/post";
import { formatDate } from "$lib/utils/formatDate";

export const diaries = writable(posts)
export const writing = writable("")

export const addDiary = () => {
  const content = get(writing)

  if (content) {
    const newDiary = {
      id: Date.now(),
      date: formatDate(),
      content,
    }

    diaries.update(diaries=> [...diaries, newDiary])
  }
}

export const updateDiary = (id) => {
  console.log("updateDiary")
  const diary = get(diaries).find(item => item.id === Number(id))
  const content = get(writing)

  console.log(diary, content)
  if (diary && content) {
    const newDiary = {
      id: diary.id,
      date: diary.date,
      content,
    }

    diaries.update(diaries=> diaries.map(item=>item.id === Number(id) ? newDiary : item))
  }
}

export const deleteDiary = (id) => {
  console.log("delete diary: ", id)
  diaries.update(diaries => diaries.filter(item => item.id !== Number(id)))
}