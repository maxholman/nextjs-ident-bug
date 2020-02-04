import React from 'react';
import Link from 'next/link';

export default () =>
    <>
        <Link href="/things/[someId]" as="/things/blah">
            <a>This works</a>
        </Link>
        {' '}
        but
        {' '}
        <Link href="/stuff/[someId]" as="/stuff/blah">
            <a>this doesn't</a>
        </Link>
    </>;

