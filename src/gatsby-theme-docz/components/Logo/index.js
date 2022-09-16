/** @jsx jsx */
import { jsx, Flex, useColorMode } from "theme-ui";
import { Link } from "docz";

export const Logo = () => {
  const [color] = useColorMode();

  console.log(color);
  const logo = color === "dark" ? "logo-dark.png" : "logo.png";
  return (
    <Flex aligmItems="center" data-testid="logo">
      <Link to="/">
        <img src={`/static/${logo}`} alt="logo" class="sitelogo" />
      </Link>
    </Flex>
  );
};
