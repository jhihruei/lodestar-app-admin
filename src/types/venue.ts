export type Venue = {
  id: string
  name: string
  cols: number
  rows: number
  seats: number
  seatInfo: Seat[]
}

export type Seat = {
  id: string
  venue_id: string
  position: number
  disabled: boolean
  category: Category
}

type Category = 'walkway' | 'blocked' | 'heigh' | string | null
