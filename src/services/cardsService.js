import instance from './instance'

const getCards = () => {
  return instance('?page=1&limit=9')
}

const deleteCard = (obj) => {
  return instance.delete(`items/${obj.id}`)
}



export const cardsService = {
  getCards,
  deleteCard,
}