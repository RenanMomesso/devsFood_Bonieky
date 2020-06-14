import styled from "styled-components";

export const CartArea = styled.div`
  background-color: #136713;
  position: fixed;
  bottom: 0;
  right: 30px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const CartHeader = styled.div`
  height: 50px;
  display: flex;
  width: 290px;
  align-items: center;
  cursor: pointer;
`;

export const CartIcon = styled.img`
  width: 23px;
  height: auto;
  margin-left: 10px;
  margin-right: 10px;
`;

export const CartText = styled.div`
  display: flex;
  flex: 1;
  color: #fff;
  font-size: 17px;
`;

export const CartBody = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  color: #fff;
`;

export const ProductsArea = styled.div``;
export const ProductItem = styled.div`
  display: flex;
  margin: 10px;
`;
export const ProductPhoto = styled.img`
  width: 64px;
  border-radius: 10px;
  height: auto;
`;
export const ProductInfoArea = styled.div`
  margin-left: 10px;
  flex: 1;
`;
export const ProductName = styled.div`
  font-size: 15px;
  font-weight: bold;
`;
export const ProductPrice = styled.div`
  font-size: 13px;
`;
export const ProductQuantityArea = styled.div`
  display: flex;
  align-items: center;
`;
export const ProductQtIcon = styled.img`
  width: 13px;
  height: auto;
  cursor:pointer;
`;
export const ProductQtText = styled.div`
  font-size: 13px;
  margin: 0px 5px;
  font-weight: bold;
`;
