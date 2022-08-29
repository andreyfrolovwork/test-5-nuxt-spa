export async function getAllProduct() {
  return fetch('http://localhost:4000/products', {
    method: 'GET',
  }).then(res => {
    return res.json()
  })
}
