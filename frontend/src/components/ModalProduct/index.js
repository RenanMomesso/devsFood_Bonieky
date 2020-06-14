import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  ProductArea,
  ProductPhoto,
  ProductButtons,
  ProductDetails,
  ProductInfoArea,
  ProductQuantityArea,
  ProductName,
  ProductIngredients,
  ProductQuantity,
  ProductButton,
  ProductPrice,
  ProductQtImage,
  ProductQtText,
} from "./styled";

function ModalProduct({ data, setStatus }) {
  const dispatch = useDispatch();
  const [Qt, setQt] = useState(1);

  useEffect(() => {
    setQt(1);
  }, [data]);

  const fechar = () => {
    setQt(1)
    setStatus(false);
  };

  const handleMinusQt = () => {
    if (Qt > 1) {
      setQt(Qt - 1);
    }
  };
  const handlePlusQt = () => {
    setQt(Qt + 1);
  };

  const handdleAddToCart = () => {
    //juntar as inforamções
    //mandar para o carrinho
    //fechar o carrinho
    dispatch({
      type: "ADD_PRODUCT",
      payload: { data, Qt },
    });

    setStatus(false);
  };

  return (
    <Container>
      <ProductArea>
        <ProductPhoto src={data.image} />
        <ProductInfoArea>
          <ProductDetails>
            <ProductName>{data.name}</ProductName>
            <ProductIngredients>{data.ingredients}</ProductIngredients>
          </ProductDetails>
          <ProductQuantityArea>
            <ProductQuantity>
              <ProductQtImage onClick={handleMinusQt} src="/assets/minus.png" />
              <ProductQtText>{Qt}</ProductQtText>
              <ProductQtImage onClick={handlePlusQt} src="/assets/plus.png" />
            </ProductQuantity>
            <ProductPrice>R${(data.price * Qt).toFixed(2)}</ProductPrice>
          </ProductQuantityArea>
        </ProductInfoArea>
      </ProductArea>
      <ProductButtons>
        <ProductButton small={true} onClick={fechar}>
          Cancelar
        </ProductButton>
        <ProductButton onClick={handdleAddToCart}>
          Adicionar ao carrinho
        </ProductButton>
      </ProductButtons>
    </Container>
  );
}

export default ModalProduct;
