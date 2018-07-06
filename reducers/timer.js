const initialState = {
    startedAt: undefined,
    stoppedAt: undefined,
    baseTime: 0
}

const timer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'TICK_START':
            return {
                ...state,
                baseTime: action.baseTime,
                startedAt: action.time,
                stoppedAt: undefined  
            };
        case 'TICK_STOP':
            return {
                ...state,
                startedAt: undefined,
                stoppedAt: action.time,
                baseTime: action.baseTime
            };
        case 'TICK_RESET':
            return {
                ...state,
                baseTime: 0,
                startedAt: state.startedAt ? action.time : undefined,
                stoppedAt: state.stoppedAt ? action.time : undefined
            };
        case 'TICK_NEW':
            return {
                ...state,
                baseTime: 0
            };
        default:
            return state;
    }
} 

export default timer