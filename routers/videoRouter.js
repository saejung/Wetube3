import express from "express";
import routes from "../routes";
import { videos, upload, videoDetail, editVideo, detailVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.detailVideo, detailVideo);

export default videoRouter;