import { TPokemonType } from "../../interface/index"

export interface ICardProps {
  id: number
  image: string
  name: string
  preview?: string
  type: TPokemonType
}
