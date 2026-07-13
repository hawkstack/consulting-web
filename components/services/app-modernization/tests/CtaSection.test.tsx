import {screen, render} from '@testing-library/react';

import CtaSection from '@/components/services/app-modernization/components/CtaSection';
import {appModernizationCtaSectionContent as content} from '@/components/services/app-modernization/data/app-modernization';

describe('CtaSection', () => {
    it('renders the component with the provided content', () => {
        render(<CtaSection content={content} />);

        // Check if the badge is rendered
        expect(screen.getByText(content.badge)).toBeInTheDocument();            

        // Check if the title is rendered
        expect(screen.getByRole('heading', {name: content.title})).toBeInTheDocument();

        // Check if the description is rendered
        expect(screen.getByText(content.description)).toBeInTheDocument();  
    });               

    it('renders the buttons with the correct labels and variants', () => {
        render(<CtaSection content={content} />);

        content.buttons.forEach((button) => {
            const buttonElement = screen.getByText(button.label);
            expect(buttonElement).toBeInTheDocument();
            expect(buttonElement).toHaveClass(
                button.variant === 'primary'
                    ? 'border-[#0B1226] bg-[#020618] text-white hover:bg-[#111B37]'
                    : 'border-[#D1D9E3] bg-white text-[#111827] hover:bg-[#F8FAFC]'
            );      

        });

        })
});