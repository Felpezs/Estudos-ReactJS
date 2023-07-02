import {
  render,
  waitFor,
  waitForElementToBeRemoved,
  screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import List from "./List";

describe("List Component", () => {
  it("should render list items", async () => {
    const { getByText, rerender, queryByText, unmount } = render(
      <List initialItems={["Banana", "Maçã", "Mexerica"]} />
    );

    expect(getByText("Banana")).toBeInTheDocument();
    expect(getByText("Maçã")).toBeInTheDocument();
    expect(getByText("Mexerica")).toBeInTheDocument();

    unmount();
    render(<List initialItems={["Bergamota"]} />);

    expect(screen.getByText("Bergamota")).toBeInTheDocument();
    expect(screen.queryByText("Banana")).not.toBeInTheDocument();
  });

  it("should be able to add a new item to the list", async () => {
    const { getByText, getByPlaceholderText, findByText, debug } = render(
      <List initialItems={[]} />
    );

    const input = getByPlaceholderText("Novo item");
    const addButton = getByText("Adicionar");

    //Loga o que está no html
    debug();
    await userEvent.setup().type(input, "Novo");
    await userEvent.setup().click(addButton);

    //expect(await findByText("Novo")).toBeInTheDocument();'
    await waitFor(() => {
      expect(getByText("Novo")).toBeInTheDocument();
      debug();
    });
  });

  it("should be able to remove an item to the list", async () => {
    const { getAllByText, queryByText } = render(
      <List initialItems={["Banana"]} />
    );

    const removeButtons = getAllByText("Remover");

    await userEvent.setup().click(removeButtons[0]);

    await waitFor(() => {
      //O uso do query é necessario pois o get falha o teste se não encontrar o elemento
      expect(queryByText("Banana")).not.toBeInTheDocument();
    });
  });
});
