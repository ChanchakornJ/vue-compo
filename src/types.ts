export interface Event{
    id: number
    category: string
    title: string
    description: string 
    location: string
    date: string
    time: string
    petsAllowed: boolean
    organizer: string
}
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface MessageState {
    message: string
    detailMessage: string
}
export interface UserState {
    user: User | null
}