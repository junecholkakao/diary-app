import { get, writable } from "svelte/store";
import { posts } from "$lib/data/post";
import { formatDate } from "$lib/utils/formatDate";

export const diaries = writable(posts)
export const writing = writable("")

// returns
//  true, if successfully added
//  false, otherwise
export const addDiary = async () => {
  const content = get(writing)

  if (content) {
    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({content})
    })

    if (!response.ok) 
      return false

    const data = await response.json()
    return data.success
  }

  return false

  // if (content) {
  //   const newDiary = {
  //     id: Date.now(),
  //     date: formatDate(),
  //     content,
  //   }

  //   diaries.update(diaries=> [...diaries, newDiary])
  // }
}

// returns
//  true, if successfully updated
//  false, otherwise
export const updateDiary = async (id) => {
  console.log("updateDiary")
  const content = get(writing)

  if (content) {
    const response = await fetch('/api', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id, content})
    })

    console.log(response)
    if (!response.ok) 
      return false

    const data = await response.json()
    return data.success
  }

  return false

  // const diary = get(diaries).find(item => item.id === Number(id))

  // console.log(diary, content)
  // if (diary && content) {
  //   const newDiary = {
  //     id: diary.id,
  //     date: diary.date,
  //     content,
  //   }

  //   diaries.update(diaries=> diaries.map(item=>item.id === Number(id) ? newDiary : item))
  // }
}

export const deleteDiary = (id) => {
  console.log("delete diary: ", id)
  diaries.update(diaries => diaries.filter(item => item.id !== Number(id)))
}