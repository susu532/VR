import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('renders Dior title', () => {
  render(<App />)
  expect(screen.getByText(/Dior — Atelier of Dreams/i)).toBeInTheDocument()
})
