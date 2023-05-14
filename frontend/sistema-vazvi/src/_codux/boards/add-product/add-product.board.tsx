import { createBoard } from '@wixc3/react-board';
import { AddProductForm } from '../../../components/add-product/add-product';

export default createBoard({
    name: 'AddProctud',
    Board: () => <AddProductForm />,
    environmentProps: {
        canvasHeight: 628,
        windowHeight: 640,
        windowWidth: 1024
    }
});
