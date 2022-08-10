export type User = {
  displayName: string | null | undefined
  photoURL: string | null | undefined
  uid: string | null | undefined
}

export type Comment = {
  user: User
  content: string
  createdAt: Date
  id: string
}

export type CommentAdd = {
  user: User
  content: string
}