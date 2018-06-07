export type Project = {
  ID: string,
  ARTICLE: string,
  DESCRIPTION: string,
  IMAGES: string[],
  NAME: string,
  NOTE: string,
  PREVIEW_IMAGE: string,
  SECTION_ID: string,
  THEME_ID: string,
  NAME_SECTION: string,
  NAME_THEME: string
}

export type ResponseData = {
  items: Project[],
  totalCount: number | string
}

export type ThemeItem = {
  ID: string,
  NAME: string
}
