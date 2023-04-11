import { useSelector } from "react-redux";
import { selectPostIds, getPostsStatus, getPostsError } from "./postSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  const orderedPostIds = useSelector(selectPostIds);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

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

  return (
    <>
      <section>{content}</section>

      <button
        id="to-top-button"
        onClick={goToTop}
        title="Go To Top"
        className="animate-bounce hidden fixed z-90 bottom-8 right-8 border-4 border-yellow-400 w-14 h-14 rounded-full drop-shadow-md bg-slate-800 text-white text-3xl font-bold"
      >
        ☝️
      </button>
    </>
  );
};
export default PostsList;
