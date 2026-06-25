import data from "../data/data.json"
import {create} from "zustand"


const usePostStore= create((set)=>({
  posts:data.posts,

  likePost: (postId)=>
    set((state) => ({
    posts : state.posts.map((post)=>
    post.id === postId ? 
    {
      ...post,likes:post.likes+1,
    }
    :post
  ),
  
    }))

}))

export default usePostStore;