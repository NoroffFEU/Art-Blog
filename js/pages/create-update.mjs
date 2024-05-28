
import { setCreatePostListener} from "../handlers/createPost.mjs";
import { setUpdatePostListener } from "../handlers/updatePost.mjs";
import { setImagePreview } from "../handlers/imagePreview.mjs";
import { setImageAltText } from "../handlers/setAltText.mjs";

const path = location.pathname;

if (path.includes("/post/create")) {
    setCreatePostListener();
} else if (path.includes("/post/edit")) {
    setUpdatePostListener();
}

setImagePreview();
setImageAltText();