import MainPage from "../pages/MainPage";
import Cabinet from "../pages/Cabinet";
import Certificate from "../pages/Certificate";

export default [
    {
        path: '/',
        element: <MainPage/>,
    },
    {
        path: '/cabinet/',
        element: <Cabinet />,
    },
    {
        path: '/certificate/',
        element: <Certificate />,
    },
]