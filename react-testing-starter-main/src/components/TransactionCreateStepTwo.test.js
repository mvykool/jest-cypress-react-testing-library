import { render, screen } from "@testing-library/react";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";
import userEvent from "@testing-library/user-event"

test("check if the amount and add a note are placeholders", async ()=> {
    render(<TransactionCreateStepTwo sender={{id: "5"}} receiver={{id: "6"}} />);

    userEvent.type(screen.getByPlaceholderText(/amount/i), "50")
    userEvent.type(screen.getByPlaceholderText(/add a note/i), "lunch")

   expect(await screen.findByRole("button", {name: /pay/i})).toBeEnabled();

})