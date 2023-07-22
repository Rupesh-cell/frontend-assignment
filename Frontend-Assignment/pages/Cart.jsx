import React from 'react'
import '../Scss/cart.scss'

const Cart = () => {
  return (
    <>
    <header>
		<h1>My Cart</h1>
	</header>
	<main>
		<table>
			<thead>
				<tr>
					<th>Product Name</th>
					<th>Price</th>
					<th>Quantity</th>
					<th>Total</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Product 1</td>
					<td>$10</td>
					<td>2</td>
					<td>$20</td>
				</tr>
				<tr>
					<td>Product 2</td>
					<td>$20</td>
					<td>1</td>
					<td>$20</td>
				</tr>
				<tr>
					<td>Product 3</td>
					<td>$5</td>
					<td>3</td>
					<td>$15</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td colspan="3">Total</td>
					<td>$55</td>
				</tr>
			</tfoot>
		</table>
		<div class="checkout-btn">
			<button>Checkout</button>
		</div>
	</main>
    </>
  )
}

export default Cart