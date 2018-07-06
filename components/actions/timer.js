export const tickStart = (baseTime = 0) => {
    return{
        type: 'TICK_START',
        time: new Date().getTime(),
        baseTime: baseTime
    }
}

export const tickStop = (baseTime = 0) => {
    return{
        type: 'TICK_STOP',
        time: new Date().getTime(),
        baseTime: baseTime
    }
}

export const tickReset = () => {
    return{
        type: 'TICK_RESET',
        time: new Date().getTime()
    }
}

export const newTick = () => {
    return{
        type: 'TICK_NEW',
        time: new Date().getTime()
    }
}
