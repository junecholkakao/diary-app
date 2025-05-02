import { supabase } from "$lib/supabaseClient";

export async function load({params}) {
  const id=params?.id
  const {data} = await supabase.from('diaries').select().eq('id', id)

  return {
    diary: (data.length > 0) ? data[0] : null
  }
}