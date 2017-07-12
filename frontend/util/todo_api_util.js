export const makeRequests = () => {
  return $.ajax ({
    method: "GET",
    url: "api/todos"
  });
};

export const create = todo => {
  return $.ajax({
    method: "POST",
    url:`api/todos/{todo.id}`
  });
};
