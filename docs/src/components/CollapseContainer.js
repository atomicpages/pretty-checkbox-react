// @flow

import * as React from 'react';
import classNames from 'classnames';

type Props = {|
    title: string,
    children: React.Node,
    demo: React.Node,
    canCollapse: boolean,
    collapsed?: boolean
|};

type State = {| collapsed: boolean |};

const ToggleSwitch = ({ handleToggleCode, collapsed, canCollapse }: { handleToggleCode: () => void, collapsed: boolean, canCollapse: boolean }): React.Element<'div'> | null => {
    if (!canCollapse) {
        return null;
    }

    return (
        <div className="show-code" onClick={handleToggleCode}>
            {collapsed ? 'show' : 'hide'}
            {' code '}
            <i className={classNames('mdi', collapsed ? 'mdi-code-tags' : 'mdi-chevron-down')} />
        </div>
    );
};

export class CollapseContainer extends React.Component<Props, State> {
    state: State = { collapsed: this.props.collapsed };

    static defaultProps = {
        canCollapse: true,
        collapsed: true
    };

    handleToggleCode = () => this.setState({ collapsed: !this.state.collapsed });

    render() {
        return (
            <div className="block card light mb-3">
                <div className="card-header bg-transparent d-flex justify-content-between">
                    <h6 className="mb-0">{this.props.title}</h6>
                    <ToggleSwitch handleToggleCode={this.handleToggleCode}
                        collapsed={this.state.collapsed}
                        canCollapse={this.props.canCollapse} />
                </div>
                {this.props.demo ? <div className="card-body">{this.props.demo}</div> : null }
                <div className={classNames('card-footer animated', this.state.collapsed ? 'hide' : 'fadeIn')}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
