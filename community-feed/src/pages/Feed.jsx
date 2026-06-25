import PostCard from "../components/PostCard.jsx";
import usePostStore from "../store/postStore.jsx";
import  data  from "../data/data.json";
function Feed() {
  const posts = usePostStore((state) => state.posts);

  return (
    <div>
     <h1>Community Feed</h1>

     {posts.map((post)=>{
     const author= data.users.find(
      (user)=>user.id === post.userId
     );
     return(
      <PostCard key={post.id}
      post={post}
      author={author}
      />
     )
     }

     )}
      
    </div>
  );
}

export default Feed;