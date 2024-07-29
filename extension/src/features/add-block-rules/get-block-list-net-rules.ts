import {
  BlockItemDtoType,
  blockListControllerGetList,
} from '../../shared/api/generated'
import {
  NetResourceType,
  NetRule,
  NetRuleActionType,
} from '../../shared/lib/chrome'

export const getBlockListNetRules = async () => {
  const blockList = await blockListControllerGetList()

  return blockList.items
    .filter((item) => item.type === BlockItemDtoType.Website)
    .map(
      (item): NetRule => ({
        id: item.id,
        action: { type: NetRuleActionType.BLOCK },
        condition: item.data.startsWith('regexp:')
          ? {
              regexFilter: item.data.replace('regexp:', ''),
              resourceTypes: [NetResourceType.MAIN_FRAME],
            }
          : {
              urlFilter: item.data,
              resourceTypes: [NetResourceType.MAIN_FRAME],
            },
      })
    )
}
