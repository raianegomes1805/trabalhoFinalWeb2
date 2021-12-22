import axios from 'axios'
import { apiUrl } from './config'

export const getProducts = async ({ searchKeyword = '' }) => {
  try {
    let queryString = '?'
    if (searchKeyword) queryString += `searchKeyword=${searchKeyword}&`

    const response = await axios({
      url: `${apiUrl}/api/perfumes${queryString}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.statusText !== 'OK') {
      throw new Error(response.data.message)
    }

    return response.data
  } catch (err) {
    console.log(err)
    return { error: err.response.data.message || err.message }
  }
}

export const getProduct = async (id) => {
  try {
    const response = await axios({
      url: `${apiUrl}/api/perfumes/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.statusText !== 'OK') {
      throw new Error(response.data.message)
    }

    return response.data
  } catch (err) {
    console.log(err)
    return { error: err.response.data.message || err.message }
  }
}

export const createProduct = async ({
  name,
  description,
  category,
  brand,
  price,
  countInStock,
  image,
}) => {
  console.log('API: ', `${apiUrl}/api/perfumes/`)

  try {
    const response = await axios({
      url: `${apiUrl}/api/perfumes/`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        name,
        description,
        category,
        brand,
        price,
        countInStock,
        image,
      },
    })
    console.log('RESPONSE API: ', response)
    if (response.statusText !== 'Created') {
      throw new Error(response.data.message)
    }
    return response.data
  } catch (err) {
    return { error: err.response.data.message || err.message }
  }
}