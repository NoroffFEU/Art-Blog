
import { setCreatePostListener} from "../handlers/createPost.mjs";
import { setUpdatePostListener } from "../handlers/updatePost.mjs";
import { setImagePreview } from "../handlers/imagePreview.mjs";
import { setImageAltText } from "../handlers/setAltText.mjs";


const path = location.pathname;

if (path.startsWith("/post/create")) {
    console.log("Setting create post listener");
    setCreatePostListener();
} else if (path.startsWith("/post/edit")) {
    console.log("Setting update post listener");
    setUpdatePostListener();
} else {
    console.log("No matching path found for setting listeners");
}


setImagePreview();
setImageAltText();