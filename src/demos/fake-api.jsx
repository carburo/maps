export function getData() {
  return Promise.resolve([
    { id: 1, point: [51.505, -0.09], name: "London" },
    { id: 2, point: [73.505, -0.09], name: "New York" },
    { id: 3, point: [10.505, 20.09], name: "New York" },
  ]);
}
