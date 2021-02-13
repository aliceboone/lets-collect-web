import React from 'react'


const Portfolio = (props) => {

  const cardsTotal = props.products.length

 let overallValue = 0;
 props.products.forEach(product => {
   overallValue += product.pricePaid;
 })

 let profit = 0;
 props.products.forEach(product => {
   if (!product.priceSold) return 
   profit += product.priceSold - product.pricePaid;
 })

  return (
    <div>
      <h1>Show Transaction History</h1>

      <div>Overall Cards
        {cardsTotal}
      </div>

      <div>Overall value
        {overallValue}
      </div>
      
      <div>Profit made with cards sold
        {profit}
      </div>
    </div>
  )
}

export default Portfolio; 
