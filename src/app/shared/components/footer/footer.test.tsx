import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react';
import { Footer } from './index';

const mappedLinks = {
    [process.env.GITHUB_URL!]: true,
    [process.env.LINKEDIN_URL!]: true,
    [`mailto:${process.env.EMAIL!}`]: true,
    [`tel:${process.env.PHONE_NUMBER!}`]: true,
}

describe('first', () => { 
    it('should be able to render footer', () => {
        render(<Footer></Footer>);

        const footerLeft = screen.getByText('Designed and Developed by Samuel Fonseca');
        expect(footerLeft).toBeInTheDocument();

        const year = new Date().getFullYear();
        const footerMiddle = screen.getByText(`Copyright © ${year} SF`);
        expect(footerMiddle).toBeInTheDocument();

        const links = screen.getAllByRole("link");
        expect(links.length).toEqual(4)
        links.forEach(link => {
            expect(mappedLinks[link.getAttribute("href") || '']).toBeTruthy();
        })
    });
})