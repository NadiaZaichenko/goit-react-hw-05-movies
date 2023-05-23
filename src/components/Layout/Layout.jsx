import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "components/Loader/Loader";
import { Header, NavigateLink, Navigation, Container } from "./Layout.styled";
import { ToastWrapper } from "components/ToastifyContainer/ToastifyContainer";
const Layout =() => {
    return(
        <>
        <Header>
            <Container>
                <Navigation>
                    <NavigateLink to='/'>Home</NavigateLink>
                    <NavigateLink to='/search'>Movie</NavigateLink>
                </Navigation>
            </Container>
        </Header>
        <Suspense fallback={<Loader/>}>
            <Outlet />
        </Suspense>
        <ToastWrapper/>
        </>
    )
}

export default Layout;