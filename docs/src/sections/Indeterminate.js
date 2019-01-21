import React from 'react';

import { Checkbox } from 'pretty-checkbox-react';

import { Title } from '../components/Title';
import { CollapseContainer } from '../components/CollapseContainer';

import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live';

const scope = { Checkbox };

const indeterminateExample = `class Indeterminate extends React.Component {
    constructor() {
        super();

        this.state = {
            indeterminate: false,
            checked: false
        };
    }

    handleCheckboxChange() {
        const newState = { checked: !this.state.checked };

        if (this.state.indeterminate) {
            newState.indeterminate = false;
        }

        this.setState({ ...this.state, ...newState });
    }

    render() {
        return (
            <>
                <Checkbox indeterminate={this.state.indeterminate}
                    shape="curve"
                    onChange={this.handleCheckboxChange.bind(this)}
                    checked={this.state.checked}
                    icon={<i className={"mdi " + (this.state.indeterminate ? "mdi-minus" : "mdi-check")} />}>Indeterminate</Checkbox>
                <button className="btn btn-small ml-auto mr-2"
                    onClick={() => this.setState({
                        indeterminate: true,
                        checked: true
                    })}
                    disabled={this.state.indeterminate}>Apply</button>
            </>
        )
    }
}
`;

function Image() {
    return (
        <>
            <Title>Indeterminate</Title>
            <div className="content">
                <p>States are handled differently in React vs. regular old CSS as seen in pretty-checkbox.
                    The only state worth mentioning is how we can use indeterminate.</p>
                <p>In most cases, you will trigger the indeterminate state of the checkbox programmatically so this is the preferred approach since you can completely control the behavior.</p>
                <LiveProvider code={indeterminateExample} scope={scope}>
                    <CollapseContainer title="Indeterminate" demo={<LivePreview />}>
                        <>
                            <LiveEditor />
                            <LiveError />
                        </>
                    </CollapseContainer>
                </LiveProvider>
            </div>
        </>
    );
}

export default Image;
