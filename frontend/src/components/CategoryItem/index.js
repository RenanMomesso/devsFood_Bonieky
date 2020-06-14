import React from "react";

import { Container, CategoryImage } from "./styled";

function CategoryItem({ data, categoriaAtivada, mudarAtivo }) {
  const handleChangeAtivo = () => {
    mudarAtivo(data.id);
  };

  return (
    <Container
      data-tip={data.name}
      data-for="tip-top"
      active={categoriaAtivada}
      id={data.id}
      onClick={handleChangeAtivo}
    >
      <CategoryImage src={data.image} />
    </Container>
  );
}

export default CategoryItem;
