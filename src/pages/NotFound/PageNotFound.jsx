import { BackLink, Main, Message } from "./PageNotFound.styled"

const PageNotFound = () => {
    return (
        <Main>
            <BackLink to="/">Go Home</BackLink>
        <Message> Page not found</Message>
        </Main>
    )
}

export default PageNotFound;