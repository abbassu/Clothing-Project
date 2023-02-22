import {compose ,createStore,applayMiddleware} from "redux";

import logger from "redux-logger"
import { rootReducer } from "./root-redux"

const middleware=[logger]
export const store =createStore(rootReducer,undefined,middleware)