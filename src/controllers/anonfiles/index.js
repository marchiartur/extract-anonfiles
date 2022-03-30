import anonFilesServices from "../../services/anonfiles/index.js";
import { catchAsync } from "../../utils/catch-async.js";

const getHref = catchAsync(async (request, response) => {
  try {
    const {
      success,
      message,
      response: serviceResponse,
    } = await anonFilesServices.getHref(request.query);

    if (success) {
      response.status(200).json({ href: serviceResponse });
      return;
    } else {
      response.status(500).send(message);
      return;
    }
  } catch (err) {
    response.status(400).send("err to get href");
  }
});

const anonFiles = {
  getHref,
};

export default anonFiles;
