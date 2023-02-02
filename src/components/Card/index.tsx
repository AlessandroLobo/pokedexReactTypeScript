import { FC } from 'react'

interface ICardProps {
  name: string,
  image: string,
}

const Card: FC<ICardProps> = ({ name, image }) => {
  return (
    <div>
      {name}
      <img src={image} alt="" />
    </div>
  )
}

export default Card