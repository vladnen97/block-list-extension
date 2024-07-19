import { ApiProperty } from '@nestjs/swagger'
import { $Enums } from '@prisma/client'
import { IsIn, IsOptional } from 'class-validator'

export class BlockItemDto {
  @ApiProperty()
  id: number

  @ApiProperty()
  blockListId: number

  @ApiProperty({
    enum: [$Enums.BlockItemType.Website, $Enums.BlockItemType.KeyWord],
  })
  type: $Enums.BlockItemType

  @ApiProperty()
  data: string

  @ApiProperty()
  createdAt: Date
}

export class BlockListDto {
  @ApiProperty()
  id: number

  @ApiProperty()
  ownerId: number

  @ApiProperty({ type: [BlockItemDto] })
  items: BlockItemDto[]
}

export class BlockListQueryDto {
  @ApiProperty({ nullable: true })
  @IsOptional()
  q?: string
}

export class AddBlockItemDto {
  @ApiProperty({
    enum: [$Enums.BlockItemType.Website, $Enums.BlockItemType.KeyWord],
  })
  @IsIn([$Enums.BlockItemType.Website, $Enums.BlockItemType.KeyWord])
  type: $Enums.BlockItemType

  @ApiProperty()
  data: string
}
