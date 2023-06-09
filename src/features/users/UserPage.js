import { useSelector } from "react-redux";
import { selectUserById } from "../users/usersSlice";
import { selectPostsByUser } from "../posts/postSlice";
import { Link, useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, Number(userId)));

  const postsForUser = useSelector((state) =>
    selectPostsByUser(state, Number(userId))
  );

  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <section>
      <h2 className="text-4xl text-green-700 font-bold">
        {user.firstName + " " + user.lastName}
      </h2>

      <ul className="list-decimal">{postTitles}</ul>
    </section>
  );
};

export default UserPage;
