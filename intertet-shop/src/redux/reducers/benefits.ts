const initialState = {
  benefits: [
    {
      id: 1,
      description: 'Онлайн Замовленя 24/7',
    },
    {
      id: 2,
      description: 'Індивідуальний Підхід',
    },
    {
      id: 3,
      description: 'ШВИДКА ДОСТАВКА',
    },
    {
      id: 4,
      description: 'ЯКІСНИЙ СЕРВІС',
    },
  ],
};

type Action<T = any> = {
  type: string,
  payload: T,
}

const benefits = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    default:
      return state;
  }
};

export default benefits;
