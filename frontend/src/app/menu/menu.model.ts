export type MenuItem = {
  ID: string,
  NAME: string,
  NOTE: string,
  DESCRIPTION: string,
  DIRECTION_ID: string
}

export type DirectionItem = {
  ID: string,
  GROUPS: GroupItem[];
  NAME: string,
  NOTE: string,
}

export type GroupItem = {
  ID: string,
  ITEMS: MenuItem[];
  NAME: string,
  NOTE: string,
  DIRECTION_ID: string
}

export type ResponseData<T> = {
  data: T[],
  totalCount: number | string
}
