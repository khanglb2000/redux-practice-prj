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

  var toTopButton = document.getElementById("to-top-button");

  // When the user scrolls down 200px from the top of the document, show the button
  window.onscroll = function () {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      toTopButton.classList.remove("hidden");
    } else {
      toTopButton.classList.add("hidden");
    }
  };

  // When the user clicks on the button, scroll to the top of the document
  function goToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <section>{content}</section>

      {/* Implement the Back Top Top Button  */}
      <button
        id="to-top-button"
        onClick={goToTop}
        title="Go To Top"
        class="animate-bounce hidden fixed z-90 bottom-8 right-8 border-2 border-yellow-400 w-16 h-16 rounded-full drop-shadow-md bg-slate-800 text-white text-3xl font-bold"
      >
        ☝️
      </button>
    </>
  );
};
export default PostsList;
