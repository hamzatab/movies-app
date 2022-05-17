import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { Card } from "./Card"

const params = {
    id: 1,
    releaseDate: "2022",
    name: "test movie",
    rate: 8,
    overview: "overview",
    poster: undefined,
    language: "fr"
}


test('renders correctly', () => {
    const { asFragment } = render(<Card  {...params} />)
    expect(asFragment()).toMatchSnapshot();
})

