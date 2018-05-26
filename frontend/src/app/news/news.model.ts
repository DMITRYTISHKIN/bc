export type News = {
  NAME: string,
  DATE: any,
  NOTE: string,
  PHOTO: string
}

export type ResponseData = {
  data: News[],
  totalCount: number | string
}
