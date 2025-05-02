import { json } from "@sveltejs/kit";
import { supabase } from "$lib/supabaseClient";

export async function POST({request}) {
  const data = await request.json()
  const {content} = data
  const {error} = await supabase.from('diaries').insert({content})

  if (error) {
    return json({success: false})
  }

  return json({success: true})
}

export async function PUT({request}) {
  const data = await request.json()
  const {id, content} = data
  console.log(id, content)
  
  const {error} = await supabase.from('diaries').update({content}).eq('id', id)

  if (error) {
    return json({success: false})
  }

  return json({success: true})
}