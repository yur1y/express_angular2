
import {ReadController as IReadController} from './interfaces/ReadController'
import {WriteController as IWriteController} from './interfaces/WriteController'
import {BaseBusiness as IBaseBusiness} from '../app/business/BaseBusiness'

export interface BaseController<T extends IBaseBusiness<Object>> extends IReadController, IWriteController{}