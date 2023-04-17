import { useDispatch, useSelector } from "react-redux";
import {
  selectPostIds,
  getPostsStatus,
  getPostsError,
  fetchMorePosts,
} from "./postSlice";
import PostsExcerpt from "./PostsExcerpt";
import { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const PostsList = () => {
  const orderedPostIds = useSelector(selectPostIds);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);
  const dispatch = useDispatch();
  const [requestStatus, setRequestStatus] = useState("idle");
  const [skip, setSkip] = useState(30);
  const [limit, setLimit] = useState(30);

  let content;
  if (postStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postStatus === "succeeded") {
    content = orderedPostIds.map((postId) => (
      <PostsExcerpt key={postId} postId={postId} />
    ));
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  var toTopButton;
  window.onscroll = function () {
    toTopButton = document.getElementById("to-top-button");
    if (toTopButton) {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        toTopButton.classList.remove("hidden");
      } else {
        toTopButton.classList.add("hidden");
      }
    }
  };

  function goToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    toTopButton.classList.add("hidden");
  }

  const onLoadMorePostClicked = () => {
    try {
      setRequestStatus("pending");
      setLimit((limit) => limit + 30);
      setSkip((skip) => skip + 30);
      console.log(typeof skip, skip);
      dispatch(fetchMorePosts(limit, skip)).unwrap();
    } catch (err) {
      console.error("Failed to delete the post", err);
    } finally {
      setRequestStatus("idle");
    }
  };

  return (
    <>
      <section>{content}</section>
      <button onClick={onLoadMorePostClicked}>Load more</button>

      <button
        id="to-top-button"
        onClick={goToTop}
        title="Go To Top"
        className="animate-bounce hidden fixed z-90 bottom-4 right-8 border-4 border-green-800 w-14 h-14 rounded-full drop-shadow-md bg-white text-white text-3xl font-bold"
      >
        <AiOutlineArrowUp className="ml-[9px] text-green-800" />
      </button>
    </>
  );
};
export default PostsList;
