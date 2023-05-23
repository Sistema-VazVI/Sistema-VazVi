import { createBoard } from '@wixc3/react-board';
import { NewLineForm } from '../../../components/new-line-form/new-line-form';
import IBrand from '../../../models/brand.model';

const brand: IBrand | undefined = {} as IBrand;

export default createBoard({
    name: 'NewLineForm',
    Board: () => <NewLineForm brand={brand}/>
});
