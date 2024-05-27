
import { setCreatePostListener} from "../handlers/createPost.mjs";
import { setUpdatePostListener } from "../handlers/updatePost.mjs";


const path = location.pathname;

if (path.startsWith("/post/create")) {
    console.log("Setting create post listener"); // Log which listener is being set
    setCreatePostListener();
}  else if (path.startsWith("/post/edit")) { // Fixed the path to include leading slash
  console.log("Setting update post listener"); // Log which listener is being set
  setUpdatePostListener();
} else {
  console.log("No matching path found for setting listeners");
}