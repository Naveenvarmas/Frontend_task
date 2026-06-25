import {useParams,Link} from 'react-router-dom'
import usePostStore from '../store/postStore';
import data from "../data/data.json"
function UserProfile(){
  const {id} = useParams();
  const posts=usePostStore((state)=>state.posts);

  const user=data.users.find(
    (user)=>user.id ===  Number(id)
  );

   const userPosts = posts.filter(
    (post) => post.userId === Number(id)
  );

  if(!user){
    return <h2>user Not Found</h2>;
  }
  return (
       <div className="container">
      <Link to="/">Back</Link>

      <h1>{user.name}</h1>

      <p>{user.bio}</p>

      <h2>Posts</h2>

      {userPosts.map((post) => (
        <div
          key={post.id}
          className="post-card"
        >
          <Link to={`/post/${post.id}`}>
            {post.content}
          </Link>

          <p>
            ❤️ {post.likes} | 💬 {post.comments.length}
          </p>
        </div>
      ))}
    </div>
  )
}

export default UserProfile;