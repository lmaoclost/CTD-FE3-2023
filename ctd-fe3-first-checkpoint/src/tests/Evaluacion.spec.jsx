import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../App"

describe("First exam Front III", ()=>{
    describe("App", ()=>{
        it("Should render without an error", ()=>{
            render(<App/>)
        })
    })
    describe("Form", ()=>{
        it("Should render at least two inputs", ()=>{
            render(<App/>)
            const inputs = screen.getAllByRole("textbox")
            expect(inputs.length).toBeGreaterThan(1)
        })

        describe('On error', () => {
            describe("Should show an error message",()=>{
                it("If the first input length is less than 3", async ()=>{
                    render(<App/>)
                    const inputs = screen.getAllByRole("textbox")
                    const submitButton = screen.getByRole('button', {type: "submit"})
                    userEvent.type(inputs[0], "DH")
                    userEvent.type(inputs[1], "Digital1234")
                    userEvent.click(submitButton)

                    const errorMessage = await screen.findByText("Por favor, verifique os dados inseridos no formulário")
                    const cardText1 = screen.queryByText("DH")
                    expect(errorMessage).toBeInTheDocument()
                    expect(cardText1).not.toBeInTheDocument()
                })
                it("If the first input contains blank spaces at the beginning", async ()=>{
                    render(<App/>)
                    const inputs = screen.getAllByRole("textbox")
                    const submitButton = screen.getByRole('button', {type: "submit"})
                    userEvent.type(inputs[0], "   DH")
                    userEvent.type(inputs[1], "Digital1234")
                    userEvent.click(submitButton)

                    const errorMessage = await screen.findByText("Por favor, verifique os dados inseridos no formulário")
                    const cardText1 = screen.queryByText("   DH")
                    expect(errorMessage).toBeInTheDocument()
                    expect(cardText1).not.toBeInTheDocument()
                })
                it("If the second input length is less than 6", async ()=>{
                    render(<App/>)
                    const inputs = screen.getAllByRole("textbox")
                    const submitButton = screen.getByRole('button', {type: "submit"})
                    userEvent.type(inputs[0], "Just testing")
                    userEvent.type(inputs[1], "code")
                    userEvent.click(submitButton)

                    const errorMessage = await screen.findByText("Por favor, verifique os dados inseridos no formulário")
                    const cardText1 = screen.queryByText("Just testing")
                    expect(errorMessage).toBeInTheDocument()
                    expect(cardText1).not.toBeInTheDocument()
                })
                it("If the second input does not contains any numbers", async ()=>{
                    render(<App/>)
                    const inputs = screen.getAllByRole("textbox")
                    const submitButton = screen.getByRole('button', {type: "submit"})
                    userEvent.type(inputs[0], "Just testing")
                    userEvent.type(inputs[1], "code")
                    userEvent.click(submitButton)

                    const errorMessage = await screen.findByText("Por favor, verifique os dados inseridos no formulário")
                    const cardText1 = screen.queryByText("Just testing")
                    expect(errorMessage).toBeInTheDocument()
                    expect(cardText1).not.toBeInTheDocument()
                })
            })
        })

        describe('On success', () => {
            it("Should render a Card with the proper information", async ()=>{
                render(<App/>)
                const inputs = screen.getAllByRole("textbox")
                const submitButton = screen.getByRole('button', {type: "submit"})
                userEvent.type(inputs[0], "Just testing")
                userEvent.type(inputs[1], "Digital1234")
                userEvent.click(submitButton)

                const cardText1 = await screen.findByText(/Just testing/)
                const cardText2 = await screen.findByText(/Digital1234/)
                const errorMessage = screen.queryByText("Por favor, verifique os dados inseridos no formulário")
                expect(cardText1).toBeInTheDocument()
                expect(cardText2).toBeInTheDocument()
                expect(errorMessage).not.toBeInTheDocument()
            })
         })
    })
})