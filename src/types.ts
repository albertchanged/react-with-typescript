export interface Pizza {
  id: number,
  name: string,
  description: string,
  price: number
}

export interface PizzaProps {
  pizza: Pizza;
}