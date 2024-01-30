import mongoose from 'mongoose';

    const PlayerSchema = new mongoose.Schema({
        rounds: {
            type: Number,
            default: 0,
        },
        player1Data: {
            name: {
                type: String,
                required: true,
            },
            wins: {
                type: Number,
                default: 0,
            },
            losses: {
                type: Number,
                default: 0,
            },
            draws: {
                type: Number,
                default: 0,
            },
        },
        player2Data: {
            name: {
                type: String,
                required: true,
            },
            wins: {
                type: Number,
                default: 0,
            },
            losses: {
                type: Number,
                default: 0,
            },
            draws: {
                type: Number,
                default: 0,
            },
        },
        
    },
    {timestamps:true});

export default mongoose.model("Player", PlayerSchema);