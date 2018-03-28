import * as React from 'react';

export const IfChildElements = ({ shouldRenderLinks }) => (
    <div>
        <h1>useful links</h1>
        <If condition={shouldRenderLinks}>
            <a href="https://wiki.gentoo.org/wiki/Handbook:Main_Page">install gentoo</a>
            <a href="https://github.com">github</a>
        </If>
    </div>
)

export const IfChildExpressions = ({ a, b, shouldRenderExpressions }) => (
    <div>
        <h1>maths</h1>
        <If condition={shouldRenderExpressions}>
            3 + 4 = {3 + 4}
            {a} + {b} = {a + b}
        </If>
    </div>
)

export const IfChildExpressionsAndElements = ({ a, b, shouldRenderStuff }) => (
    <div>
        <h1>maths</h1>
        <If condition={shouldRenderStuff}>
            3 + 4 = {3 + 4}
            <a href="https://wiki.gentoo.org/wiki/Handbook:Main_Page">install gentoo</a>
            <a href="https://github.com">github</a>
            {a} + {b} = {a + b}
        </If>
    </div>
)

export const IfConditionIsExpressions = ({ name1, name2 }) => (
    <article>
        <If condition={name1.length !== 0}>
            <h1>First: {name1}</h1>
        </If>
        <If condition={name1 !== name2 && name2.length !== 0}>
            <h2>Second: {name2}</h2>
        </If>
    </article>
)

export const NestedIfs = ({ a, b }) => (
    <div>
        <If condition={a % 2}>
            <h1>a is add</h1>
            <If condition={b % 2}>
                b is odd
            </If>
            <If condition={b % 2 === 0}>
                b is even
            </If>
        </If>
    </div>
)

export const EmptyIfs = ({ a, b }) => (
    <p>
        <If condition={b % 2}>
        </If>
        <If condition={b % 2 === 0}>
        </If>
    </p>
)

export const EmptyNestedIfs = ({ a, b }) => (
    <p>
        <If condition={a % 2}>
            <If condition={b % 2}>
            </If>
            <If condition={b % 2 === 0}>
            </If>
        </If>
    </p>
)
