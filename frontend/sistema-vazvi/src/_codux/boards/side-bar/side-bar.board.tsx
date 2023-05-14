import { createBoard } from '@wixc3/react-board';
import { SideBar } from '../../../components/side-bar/side-bar';

export default createBoard({
    name: 'SideBar',
    Board: () => <SideBar />,
    environmentProps: {
        canvasHeight: 768,
        canvasWidth: 1512,
        windowWidth: 1024,
        windowHeight: 768
    }
});
