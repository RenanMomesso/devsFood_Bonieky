import React, { useState } from "react";
import { Container, Logo, SearchInput } from "./styled";

export default ({ onSearch, search }) => {
  const [isActive, setIsActive] = useState(search == ''?false:true);

  const handleInputFocus = () => {
    setIsActive(true);
  };
  const handleInputonBlur = () => {
    if (search == '') {
      setIsActive(false);
    }
  };
  const searchHandler = (e) => {
    onSearch(e.target.value);
  };

  return (
    <Container>
      <Logo src={"/assets/logo.png"} />
      <SearchInput
        type="text"
        placeholder="Digite um produto"
        active={isActive}
        value={search}
        onChange={searchHandler}
        onFocus={handleInputFocus}
        onBlur={handleInputonBlur}
      />
    </Container>
  );
};
