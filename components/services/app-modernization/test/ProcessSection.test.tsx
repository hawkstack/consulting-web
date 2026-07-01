import {screen, render } from '@testing-library/react';

import ProcessSection from '@/components/services/app-modernization/components/ProcessSection';
import {appModernizationProcessSectionContent as content} from '@/components/services/app-modernization/data/app-modernization';

describe('ProcessSection', () => {
    it('render the process section with the correct content', () => {
        render(<ProcessSection content={content} />);
        expect(screen.getByText(content.badge)).toBeInTheDocument();
        expect(screen.getByRole('heading', {name : content.title})).toBeInTheDocument();
    })

    it('render the correct process stpes', () => {
        render(<ProcessSection content={content} />);
        content.steps.forEach((step) => {
            expect(screen.getAllByText(step.stepNumber).length).toBeGreaterThan(0);
            expect(screen.getAllByRole('heading', {name :step.title}).length).toBeGreaterThan(0);
            expect(screen.getAllByText(step.description).length).toBeGreaterThan(0);
        })  
    })
});