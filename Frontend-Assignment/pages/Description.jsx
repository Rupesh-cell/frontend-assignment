import React, { useState, useEffect } from "react";
import "../Scss/description.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../components/Nav"
import Footer from "../components/Footer"


const Description = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [idx, setIdx] = useState();
  const [variant, setVariant] = useState("anything")


//   const addtoCartClick = () => {
//     const products = {
//         ...product,
// 		variant : variant,

       
//     };

//     dispatch(
//         addProduct({
//             product: products,
// 			quantity: 1,
            
//         })
//     );
// };

  useEffect(() => {
    setIdx(id);
  }, [id]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://fakestoreapi.com/products/" + idx + "/",
    };

    axios
      .request(options)
      .then(function (response) {
        setProduct(response.data);
          console.log(response.data);
      })

      .catch(function (error) {
        console.error(error);
      });
  }, [idx, id]);

  return (
    <>
    <Nav/>
      <div className="container">
        <div class="product-image">
          <img src={product?.image} alt="Product Image" />
        </div>
        <div className="product-description">
          <h1>{product?.title}</h1>

          <h2>Price: Rs.{product?.price}</h2>
          <button >Add to Cart</button>
          <h1>Description</h1>
          <p>{product?.description}</p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Description;
