import * as React from 'react';
import Header from './head';
import "../../styles/common.scss";

class TopContainer extends React.Component<{}, {}, any> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return <div>
            <Header />
        </div>
    }

}
export default TopContainer