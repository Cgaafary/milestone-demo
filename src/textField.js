import React from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import { Navigation } from 'react-toolbox/lib/navigation';
import { Link } from 'react-toolbox/lib/link';

export default () => (
    <AppBar title="This is the Title" leftIcon="menu">
        <Navigation type='horizontal'>
            <Link href='http://' label='link1' />
        </Navigation>
    </AppBar>
);