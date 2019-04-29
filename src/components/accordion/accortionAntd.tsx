//手风琴模式
import Accordion from 'antd-mobile/lib/accordion';
import React from 'react';
import './accordion.scss';

class AccordionAntComponent extends React.Component {
  public render() {
    return (
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Accordion accordion={true} openAnimation={{}} className="my-accordion" onChange={this.onChange}>
          <Accordion.Panel header="Title 3" className="pad">
            text text text text text text text text text text text text text text text
          </Accordion.Panel>
        </Accordion>
      </div>
    );
  }
  private onChange = () => {
    console.log("key");
  }
}

export default AccordionAntComponent;

