import instance from './instance'

const getCards = (pages) => instance(`?page=${pages}&limit=9`)

const deleteCard = (obj) => {
  return instance.delete(`items/${obj.id}`)
}

export const cardsService = {
  getCards,
  deleteCard,
}