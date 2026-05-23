export type Project = {
  title: string
  description: string
  image: string
  caption?: string
  tags: string[]
  github?: string | null
  live?: string | null
  featured?: boolean
}
