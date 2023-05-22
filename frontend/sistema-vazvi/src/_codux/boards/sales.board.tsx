import { createBoard } from "@wixc3/react-board";
import { ShoppingCart } from "../../components/shopping-cart/shopping-cart";
import { ProductSearchBar } from "../../components/product-search-bar/product-search-bar";
import { SaleCard } from '../../components/sale-card/sale-card';
import '../../routes/app.css'
import { Cliente } from '../../components/cliente/cliente';
import { Plazos } from '../../components/plazos/plazos';

export default createBoard({
    name: "sales",
    Board: () => (
        <div className="grid">
            <div className="column">
                {/* <Cliente /> */}
                <Plazos />
            </div>
            <div className="col2">
                <div>
                    {/* <ProductSearchBar /> */}
                    <div className="containerCardsSales">
                        {/* <SaleCard />
                        <SaleCard />
                        <SaleCard />
                        <SaleCard /> */}
                    </div></div>
                <div>
                    {/* <ShoppingCart /> */}
                </div>
            </div></div>
    ),
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080
    }
});
