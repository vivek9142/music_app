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
            const playist = state.playist;
            const updatedPlayist = playist.filter(item => item.id === action.payload.playistId)[0];
            if(!(updatedPlayist.songs.filter(item => item.id === action.payload.song.id).length===1))
            updatedPlayist.songs.push({...action.payload.song,addedAt:Date.now()});
            const updatePlayist = state.playist.map(item => item.id === action.payload.playistId ? updatedPlayist : item);
            return {...state,playist:updatePlayist};
        
        case Actions.DELETE_SONG_FROM_PLAYIST:
            let playlst = Object.assign([], state.playist);         
            let specificPlayist = playlst.filter(item => item.id === action.payload.playistId)[0];
            let updatedSongs = specificPlayist.songs.filter(item => item.id !== action.payload.songId);
            specificPlayist['songs'] = updatedSongs;
            const fullPlayst = [...playlst.map(item => item.id === action.payload.playistId ? specificPlayist : item)];
            
            return Object.assign([],state,{playist:[...fullPlayst]});

        case Actions.SHUFFLE_LIST:
            let list = Object.assign([],state.playist);
            let songlist = list.filter(item => item.id === action.payload.playistId)[0];
            if(songlist.songs.length>1){
                for(let i=songlist.songs.length-1;i>0;i--){
                    let j = Math.floor(Math.random()*(i+1));
                    [songlist.songs[i],songlist.songs[j]] = [songlist.songs[j],songlist.songs[i]];
                }
            }
            const fullPlyist = list.map(item => item.id === action.payload.playlistId ? songlist : item);
            return Object.assign([],state,{playist:fullPlyist});

        default:
            return state;
    }
}

export default playistReducer;