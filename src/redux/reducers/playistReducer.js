import Actions from "../actions/playistActions"

const initialState = {
    playist:[]
    // name:'',
    // songs:[],
    // createDate:''
}

const playistReducer = (state=initialState,action) => {
    switch(action.type){
        case Actions.CREATE_PLAYIST:
            const date = new Date();
            const time =`${date.getHours>9?date.getHours():'0'+date.getHours()}:${date.getMinutes()>9?date.getMinutes():'0'+date.getMinutes()} , ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
            const id = Math.random().toString(36).substr(2, 5);
            let Playist = [...state.playist];
            Playist.push({id:id,name:action.payload.playistName,createdDate:time,songs:[]});

            return{
                ...state,
                playist: Playist
            }
        case Actions.ADD_SONG_TO_PLAYIST:
            const playist = state.playist.filter(item => item.id === action.payload.playistId)[0];
            playist.songs.push({...action.payload.song,addedAt:Date.now()});
            const updatedPlayist = state.playist.map(item => item.id === action.payload.playistId ? playist : item);
            return updatedPlayist;
        
        default:
            return state;
    }
}

export default playistReducer;