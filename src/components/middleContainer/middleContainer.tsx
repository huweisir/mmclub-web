import * as React from 'react';
import "../../styles/common.scss";
import PriRights from './priRights';
import FeaturedPriRights from './featuredPriRights';
import Privileges from './privileges';
import { ajax } from 'src/http/fetch';
import { urlConfig } from 'src/http/config';


class MiddleContainer extends React.Component<any, any>{
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            priIds: [],
            privileges: [],
            selectedEquities: []
        };
    }

    public async componentWillMount() {
        await this.getPrisEquities();
    }
    public render() {
        const { selectedEquities, priIds, privileges } = this.state
        return <div>
            <Privileges privileges={privileges} />
            <div className="grayBar" />
            <FeaturedPriRights selectedEquities={selectedEquities} />
            <PriRights priIds={priIds} />
        </div>
    }
    private async getPrisEquities() {
        const res = await ajax.get(urlConfig.contentPath + '/xhr/getPrisEquities.do');
        const data = res.data || {};
        const selectedEquities: SelectedEquities[] = data.selectedEquities || []
        const privileges: Privi[] = data.privileges || [];
        this.setState({ privileges, selectedEquities });
        const priIds = privileges.filter(item => item.id).map(item => item.id);
        this.setState({ priIds });
    }


}
export default MiddleContainer