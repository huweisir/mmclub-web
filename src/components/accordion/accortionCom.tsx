import AnimateHeight from 'react-animate-height';
import React, { Fragment } from 'react';
import './accortionCom.scss';

class AccordionBody extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        const classNames = `accordion_body ${this.props.classP || ""}`;
        const height = this.props.showIntro ? "auto" : "0";
        return <Fragment>
            <AnimateHeight duration={150}
                height={height}>
                <div className={classNames} style={this.props.styleP}>{this.props.content}</div>
            </AnimateHeight>
        </Fragment>
    }

}

export default AccordionBody;
