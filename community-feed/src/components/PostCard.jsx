import { Link,useNavigate} from "react-router-dom";

function PostCard({post,author}){
  const navigate=useNavigate();

  return(
    <div 
    className="post-card"
    onClick={()=>navigate(`/post/${post.id}`)}>
      <h3 
      onClick={(e)=>{e.stopPropagation()}}>
        <Link to={`/user/${author.id}`}>{author.name}</Link>
      </h3>
      <p>{post.content}</p>
      <div>
        ♥️ {post.likes} | 💭 {post.comments.length}
      </div>
    </div>
  )
}

export default PostCard;