export interface Conversation {
  id: string
  title: string
  timeLabel: string
}

export interface CurrentUser {
  name: string
  firstName: string
  provider: string
  email: string
  initial: string
}
