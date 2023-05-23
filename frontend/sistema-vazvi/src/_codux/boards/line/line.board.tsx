import { createBoard } from '@wixc3/react-board';
import { Line } from '../../../components/line/line';
import { Dispatch, SetStateAction } from 'react';
import IBrand from '../../../models/brand.model';

const brand: IBrand  = {} as IBrand;
const setBrand: Dispatch<SetStateAction<IBrand | undefined>> = {} as Dispatch<SetStateAction<IBrand | undefined>>;
const setIsOpen: Dispatch<SetStateAction<boolean>> = {} as Dispatch<SetStateAction<boolean>>;

export default createBoard({
    name: 'Line',
    Board: () => <Line brand={brand} setBrand={setBrand} setIsOpen={setIsOpen}/>
});
