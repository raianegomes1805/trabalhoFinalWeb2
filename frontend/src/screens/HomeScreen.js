import axios from "axios"
import Rating from "../components/Rating"
const HomeScreen = {
    render: async () => {
      const response = await axios({
        url: "http://localhost:5000/api/perfumes",
        headers: {
          "content-Type": "application/json"
        }
      })
      if(!response || response.statusText !== "OK") {
        return "<div>Error in getting data</div>"
      }
  
      const products =await response.data
      return `
        <ul class="perfumes">
        ${products.map(
          (product) => `
          <li>
            <div class="perfume">
              <a href="/#/perfume/${product._id}">
                <img src="${product.image}" alt="${product.name}" />
              </a>
              <div class="perfume-name">
                <a href="/#/perfume/3">
                  ${product.name}
                </a>
              </div>
              <div class="perfume-rating">
                ${Rating.render({value: product.rating, text:
                  `${product.numReviews} Avaliações`
                })}
              </div>
              <div class="perfume-brand">
                ${product.brand}
              </div>
              <div class="perfume-price">
                R$ ${product.price}
              </div>
            </div>
          </li>
          `
        ).join('\n')}
        </ul>
      `
    }

}
export default HomeScreen