import { renderWithTheme } from "~/utils/tests/helpers";

import Main from ".";

describe("<Main />", () => {
  it("should render correctly", () => {
    renderWithTheme(<Main />);
  });
});
