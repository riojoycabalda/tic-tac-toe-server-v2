import PlayerModel from "../model/PlayerModel.js";

export const getPlayersRecord = async(req, res) => {
    try {
        // Get players records from Database
        const playersRecord = await PlayerModel.find();
        return res.status(201).json(playersRecord);
    } catch (error) {
        console.error('Error creating record:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const newRecord = async (req, res) => {
    const player = req.body;
    try {
        // Check if all required fields exist
        if(!player.rounds) return res.status(401).json('Missing field');
        if (!('name' in player.player1Data && 'wins' in player.player1Data && 'losses' in player.player1Data && 'draws' in player.player1Data)) return res.status(401).json('Missing field');

        if (!('name' in player.player2Data && 'wins' in player.player2Data && 'losses' in player.player2Data && 'draws' in player.player2Data)) return res.status(401).json('Missing field');

        // Create a new instance of the PlayerModel
        const newPlayer = new PlayerModel(player);
        const createdData = await newPlayer.save();

        //  Successfully created the new record
        return res.status(201).json({ message: 'Successfully created', createdData });
        
    } catch (error) {
        console.error('Error creating record:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}