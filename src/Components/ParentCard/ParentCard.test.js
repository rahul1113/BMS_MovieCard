import { render } from '@testing-library/react'
import ParentCard from './ParentCard'


describe('ParentCard', function () {
    it('ParentChild', () => {
        const { getByTestId } = render(<ParentCard />)
        expect(getByTestId('parent-card')).toBeInTheDocument()
    })
})