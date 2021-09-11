import Dexie from 'dexie'
import Entity from './Entity'

type Table<T extends Entity> = Dexie.Table<T, number>
export default Table
