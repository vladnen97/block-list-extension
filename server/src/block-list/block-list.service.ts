import { Injectable } from '@nestjs/common'
import { DbService } from '../db/db.service'
import { AddBlockItemDto, BlockListQueryDto } from './dto'

@Injectable()
export class BlockListService {
  constructor(private readonly db: DbService) {}

  create(userId: number) {
    return this.db.blockList.create({
      data: {
        ownerId: userId,
      },
    })
  }

  getByUserId(userId: number, query: BlockListQueryDto) {
    return this.db.blockList.findUniqueOrThrow({
      where: { ownerId: userId },
      include: {
        items: {
          orderBy: { createdAt: 'desc' },
          where: { data: { contains: query.q, mode: 'insensitive' } },
        },
      },
    })
  }

  async addItem(userId: number, data: AddBlockItemDto) {
    const { id: blockListId } = await this.db.blockList.findUniqueOrThrow({
      where: { ownerId: userId },
    })

    return this.db.blockItem.create({
      data: {
        blockListId,
        ...data,
      },
    })
  }

  async removeItem(userId: number, itemId: number) {
    const { id: blockListId } = await this.db.blockList.findUniqueOrThrow({
      where: { ownerId: userId },
    })

    return this.db.blockItem.delete({ where: { id: itemId, blockListId } })
  }
}
