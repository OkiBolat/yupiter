import instance from './instance'

const getCards = () => {
  return instance("items")
}

const deleteCard = (obj) => {
  return instance.delete(`items/${obj.id}`)
}



export const cardsService = {
  getCards,
  deleteCard,
}