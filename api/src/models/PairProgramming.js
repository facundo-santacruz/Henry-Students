import mongoose, { Schema } from 'mongoose';
import moment from 'moment';

const PPSchema = new Schema({
    horaDeInicio:  { 
        type: String,
        default: "15:00:00"
    },
    horaDeCierre: {
        type: String,
        default: "17:00:00"
    },
    dia: {
        type: String,
        default: () => moment(moment.now()).format("DD/MM/YYYY")
    },
    mesas: [
        { type : Schema.Types.ObjectId, ref: 'Mesas' }
    ],
    cohorte: {
        type: Number,
    },
    usuarios: {
        type: Array
    }
    
})

const PairProgramming = mongoose.model('PairProgramming', PPSchema);

export default PairProgramming;
