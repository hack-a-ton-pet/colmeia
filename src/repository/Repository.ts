import { IndexableType, Table } from 'dexie'
import Entity from '../types/entity/Entity'

export default abstract class Repository<ENTITY extends Entity> {
	protected table: Table<ENTITY>

	constructor(table: Table<ENTITY>) {
		this.table = table
	}

	getById = async (id: number): Promise<ENTITY | undefined> => {
		return this.table.where('id').equals(id).first()
	}

	getFirst = async (): Promise<ENTITY | undefined> => {
		const entities = await this.getAll()
		return entities.length > 0 ? entities[0] : undefined
	}

	getAll = async (): Promise<ENTITY[]> => {
		return this.table.toArray()
	}

	getByIds = async (ids: number): Promise<ENTITY[]> => {
		return this.table.where('id').anyOf(ids).toArray()
	}

	delete = async (entity: ENTITY): Promise<void> => {
		if (this.hasId(entity)) {
			await this.table.delete(entity.id!)
		}
	}

	deleteAll = async (entities: ENTITY[]): Promise<void> => {
		const ids = this.extractIds(entities)
		await this.table.where('id').anyOf(ids).delete()
	}

	save = async (entity: ENTITY): Promise<ENTITY> => {
		entity = this.removeEmptyId(entity)
		entity.id = await this.table.put(entity)
		return entity
	}

	saveAll = async (entities: ENTITY[]): Promise<ENTITY[]> => {
		entities = this.removeEmptyIds(entities)
		const ids = await this.table.bulkPut(entities, { allKeys: true })
		return this.getEntitiesWithIds(entities, ids)
	}

	private extractIds = (entities: ENTITY[]): number[] => {
		return entities
			.filter(entity => this.hasId(entity))
			.map(entity => entity.id!)
	}

	private hasId = (entity: ENTITY): boolean => {
		return entity.id !== undefined && entity.id !== null
	}

	private getEntitiesWithIds = (
		entities: ENTITY[],
		ids: IndexableType[],
	): ENTITY[] => {
		return entities.map((entity, index) => {
			entity.id = ids[index]
			return entity
		})
	}

	private removeEmptyIds = (entities: ENTITY[]): ENTITY[] => {
		return entities.map(entity => this.removeEmptyId(entity))
	}

	private removeEmptyId = (entity: ENTITY): ENTITY => {
		if (entity.id === undefined || entity.id === null) {
			delete entity.id
		}
		return entity
	}
}
