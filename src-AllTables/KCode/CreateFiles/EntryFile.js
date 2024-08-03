import { StartFunc as HtmlFiles } from "./HtmlFiles.js";
// import { StartFunc as sideBarItems } from "./sideBarItems.js";
import { StartFunc as jsFiles } from "./jsFiles.js";

const StartFunc = ({ inSrcPath }) => {
    HtmlFiles({ inSrcPath });
    // sideBarItems({ inSrcPath });
    jsFiles({ inSrcPath });
};

export { StartFunc };