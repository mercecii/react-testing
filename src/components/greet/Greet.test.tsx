import { render, screen } from '@testing-library/react'
import Greet from './Greet'

test('Greet renders correctly', () => {
    console.log('ki')
    render(<Greet />)
    const textElement = screen.getByText(/greet/i );
    expect(textElement).toBeInTheDocument();
})