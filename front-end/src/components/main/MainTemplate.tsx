import React, { ReactNode } from 'react';
import PageTemplate from 'components/base/PageTemplate';

type MainTemplateProps = {
    children: ReactNode;
}

function MainTemplate({children}: MainTemplateProps) {
    return(
        <PageTemplate>
            <main>
                {children}
            </main>
        </PageTemplate>
    )
}

export default MainTemplate;