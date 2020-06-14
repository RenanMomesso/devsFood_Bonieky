import React from "react";
import { LinkArea, LinkIcon } from "./styled";
import { useHistory, useLocation } from "react-router-dom";

export default ({ icon, link, title }) => {

    const history = useHistory();
    const location = useLocation();
    const handleClick = e => {
        e.preventDefault()
        history.push(link)
    }
    const isActive = location.pathname == link
  return (
    <LinkArea data-tip={title} data-for="tip-right" active={isActive} href={link} onClick={handleClick}>
      <LinkIcon src={icon} />
    </LinkArea>
  );
};
