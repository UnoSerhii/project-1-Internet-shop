const initialState = {
  categories: [
    {
      id: 1,
      isChecked: false,
      title: "Кузовні деталі",
      count: 760,
    },
    {
      id: 2,
      isChecked: false,
      title: "Фільтри",
      count: 760,
    },
    {
      id: 3,
      isChecked: false,
      title: "Фари, Оптика, Освітлення",
      count: 760,
    },
    {
      id: 4,
      isChecked: false,
      title: "Двигуни і деталі двигунів",
      count: 760,
    },
    {
      id: 5,
      isChecked: false,
      title: "Система охолодження двигуна",
      count: 760,
    },
    {
      id: 6,
      isChecked: false,
      title: "Електрична система запалювання",
      count: 760,
    },
    {
      id: 7,
      isChecked: false,
      title: "Гальмівна система",
      count: 760,
    },
    {
      id: 8,
      isChecked: false,
      title: "Рульова система",
      count: 760,
    },
  ],
};

type Action<T = any> = {
  type: string;
  payload: T;
};

const categories = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    default:
      return state;
  }
};

export default categories;
