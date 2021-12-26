import dataActions from '../actions/dataActions'; 
const initialState = {
    search:'',
    error:null,
    errorEntity:null,
    loading:false,
    loadingEntity:null,
    photos:[],
    albums:[],
    finalData:[]
};

const dataReducer = (state=initialState,action) => {
    switch(action.type) {
        case dataActions.SET_SEARCH:
          return{
            ...state,
            search:action.payload
          }
        case dataActions.GET_DATA_PENDING:
            return {
              ...state,
              loading:true,
              loadingEntity:action.payload.entity,
              error:null,
              errorEntity:null,
            };

        case dataActions.GET_DATA_SUCCESS:
          const obj = {
            ...state,
            error:null,
            loading:false,
            loadingEntity:null,
          }
          if(action.payload.entity==='albums')
            {
              obj['albums'] = action.payload.data;
            }
             else if(action.payload.entity==='photos')
            {
              obj['photos'] = action.payload.data;
            }
            return obj;
        case dataActions.GET_DATA_FAILURE:
          const ob = {
            ...state,
            loading:false,
            loadingEntity:null,
            error:action.payload.error,
            errorEntity:action.payload.entity
          };
          action.payload.entity === 'photos' ? ob['photos'] = [] : ob['albums'] = [];
          
          return ob;
        case dataActions.SET_FINAL_DATA:
          return {
            ...state,
            finalData:action.payload.data
          }

        case dataActions.RETRIEVE_LOCAL:
          return action.payload;

        default:
            return state;
    }
}

export default dataReducer;