export type Project = {
  NAME: string,
  SECTION: string,
  PREVIEW_IMAGE: string,
}

export type ResponseData = {
  data: Project[],
  totalCount: number | string
}
