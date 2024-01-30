import { getPlayersRecord,newRecord } from "../controllers/PlayerController.js";



export default  (router) => {
    router.get('/api/players', getPlayersRecord);
    router.post('/api/newrecord', newRecord);
}