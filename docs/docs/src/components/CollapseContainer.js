// @flow

import * as React from 'react';
import classNames from 'classnames';

type Props = {
    title: string,
    children: React.Node,
    demo: React.Node
}

export class CollapseContainer extends React.Component {    
    state = { collapsed: true };

    handleToggleCode = () => this.setState({ collapsed: !this.state.collapsed });

    render(props: Props) {
        return (
            <div className="block card light mb-3">
                <div className="card-header bg-transparent d-flex justify-content-between">
                    <h6 className="mb-0">{this.props.title}</h6>
                    <div className="show-code" onClick={this.handleToggleCode}>
                        {this.state.collapsed ? 'show' : 'hide'}
                        {' code '}
                        <i className={classNames('mdi', this.state.collapsed ? 'mdi-code-tags' : 'mdi-chevron-down')} />
                    </div>
                </div>
                <div className="card-body">{this.props.demo}</div>
                <div className={classNames('card-footer animated', this.state.collapsed ? 'hide' : 'fadeIn')}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}