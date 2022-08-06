import {render,screen} from "@testing-library/react"
import HEADER from "./Header/index"


test("test react component",()=>{
    render(<HEADER/>)
   const compTest= screen.getByText(/welcome data/i)
   expect(compTest).toBeInTheDocument()
})