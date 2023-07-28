import React from "react";

function ProductList(){
    const listProduct = [
        {
            id: 1,
            name: "bl bla",
            num: 13,
            link: "http://"
        },
        {
            id: 2,
            name: "bl bla bla",
            num: 13,
            link: "http://"
        },
        {
            id: 2,
            name: "bl bla bla",
            num: 6,
            link: "http://"
        }
    ];
    return(
        <>
        {listProduct.map((listProduct)=>(
            <div class="ui-contenedor-products">
            <div class="ui-contenedor-products-title">
              <h4 class="">{listProduct.name}</h4>
              <a href={listProduct.link}>ver mas</a>
            </div>
            <div className="ui-contenedor-products-items">
            {Array.from({ length: listProduct.num }, (_, index) => (
              <p key={index}>The number is {index}</p>
            ))}
            <div className="ui-contenedor-products-item"></div>
          </div>
          </div>
        )) }
        </>
    );

}
export default ProductList;