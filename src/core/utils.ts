const checkResponse = (res: Response) => {
  if (!res.ok) {
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }
    return res.json();
};

export default checkResponse;
