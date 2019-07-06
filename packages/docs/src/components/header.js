import { Link } from 'gatsby';
import React from 'react';
import classNames from 'classnames';
import GitHubButton from 'react-github-btn';

const Header = React.memo(
    ({ siteTitle, description, className, isHome = false, ...rest }) => (
        <header
            className={classNames(
                'header',
                { 'header--alt': !isHome },
                className
            )}
            {...rest}>
            <h1>
                <Link to="/">{siteTitle}</Link>
            </h1>
            <p className="header__description">
                {description}
                {isHome ? (
                    <iframe
                        src="https://ghbtns.com/github-btn.html?user=atomicpages&repo=pretty-checkbox-react&type=star&count=true"
                        frameBorder="0"
                        scrolling="0"
                        width="90px"
                        height="20px"
                        title="Github Stargazers"
                    />
                ) : null}
            </p>
            {!isHome ? (
                <p className="github-buttons button-group">
                    <GitHubButton
                        href="https://github.com/atomicpages/pretty-checkbox-react"
                        data-icon="octicon-star"
                        aria-label="Star atomicpages/pretty-checkbox-react on GitHub">
                        Star
                    </GitHubButton>
                    <GitHubButton
                        href="https://github.com/atomicpages/pretty-checkbox-react/archive/master.zip"
                        data-icon="octicon-cloud-download"
                        aria-label="Download atomicpages/pretty-checkbox-react on GitHub">
                        Download
                    </GitHubButton>
                </p>
            ) : null}
        </header>
    )
);

Header.displayName = 'Header';

export default Header;
