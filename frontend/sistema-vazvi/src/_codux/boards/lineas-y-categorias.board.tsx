import { createBoard } from '@wixc3/react-board';
import { SideBar } from '../../components/side-bar/side-bar';
import { NewItem } from '../../components/new-item/new-item';
import { Lineacat } from '../../components/line/line';
import { Line } from '../../components/category/category';

export default createBoard({
    name: 'Lineas_y_categorias',
    Board: () => <div className="Content">
        <h6 className="Titulo">Lineas y categorias </h6>
        <SideBar />
        <div className="Content2">
            <NewItem />
            <Line />
            <Line />
            <Line />
            <Line />
        </div>
        <div className="Content2">
            <NewItem />
            <Lineacat />
            <Lineacat />
            <Lineacat />
            <Lineacat />
        </div>
    </div>,
    environmentProps: {
        canvasWidth: 1052,
        canvasHeight: 764,
        windowWidth: 1024,
        windowHeight: 768
    }
});
