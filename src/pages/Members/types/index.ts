export interface Member {
  id: string
  name: string
  displayName: string | null
  linkedin: string | null
  git: string
  photo: string
  status: {
    name: string
  }
}
