import express from "express";
import player from "./player.js";
const router = express.Router();

export default () => {
    player(router);

    return router;

}
