import { combineReducers } from 'redux'
import PlayerReducer from './player'
import GameReducer from './game'
import NetworkReducer from './network'

const rootReducer = combineReducers({
    game: GameReducer,
    network: NetworkReducer,
    player: PlayerReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
