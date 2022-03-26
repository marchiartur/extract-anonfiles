import { extractHref } from "../../extract/index.js";

const getHref = async (params) => {
  console.log("params", params);

  try {
    if (params?.link) {
      const href = await extractHref(params);

      return {
        success: true,
        message: "success to get href",
        response: href,
      };
    } else {
      return {
        success: false,
        message: "no link provided",
        response: null,
      };
    }
  } catch (err) {
    return {
      success: false,
      message: "err",
      response: null,
    };
  }
};

const anonFilesServices = {
  getHref,
};

export default anonFilesServices;
