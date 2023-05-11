import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Home from "./index";
import { DataProvider } from "../../contexts/DataContext";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    beforeEach(() => {
      jest.useFakeTimers({});
    });

    afterEach(() => {
      jest.clearAllTimers();
    });

    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      act(() => jest.advanceTimersByTime(5000));
      await waitFor(() => screen.getByText("Message envoyé !"));
    });
  });
});

describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    render(
      <DataProvider>
        <Home />
      </DataProvider>
    );
    expect(screen.getByTestId("eventlist")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("#DigitonPARIS")).toBeInTheDocument();
    });
  });
  it("a list a people is displayed", async () => {
    render(<Home />);
    expect(screen.getByTestId("peoplelist")).toBeInTheDocument();
    expect(screen.getByText("Jean-baptiste")).toBeInTheDocument();
  });
  it("a footer is displayed", async () => {
    render(<Home />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
  it("an event card, with the last event, is displayed", async () => {
    render(
      <DataProvider>
        <Home />
      </DataProvider>
    );
    await waitFor(() => {
      expect(screen.getByTestId("lastEvent")).toBeInTheDocument();
    });
  });
});
