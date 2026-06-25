
import { useParams,Link } from "react-router-dom";
import usePostStore from "../store/postStore";
import data from "../data/data.json"

function PostDetails(){
   const {id}=useParams();

   const posts=usePostStore((state) => state.posts);
   const likePost=usePostStore((state)=> state.likePost);

   const post=posts.find((p) => p.id === Number(id));

   if(!post){
    return <h2>Post not found</h2>
   }

   const author=data.users.find(
    (user)=>user.id === post.userId
   );

   return(
    <div className="container">
      <Link to="/"> Back</Link>

      <h2>{author.name}</h2>
      <p>{post.content}</p>
      <h3>♥️ {post.likes}</h3>

      <button onClick={()=>likePost(post.id)}>
        Like ♥️
      </button>

      <h3>Comments</h3>

      {post.comments.map((comment) => (
        <p key={comment.id}>.{comment.text}</p> 
      ))}
    </div>
   )

}

export default PostDetails;