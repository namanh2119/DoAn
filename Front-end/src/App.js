import { publicRoutes } from './components/router';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/Layouts/DefaultLayout';
import Admin from './components/pages/Admin';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        // eslint-disable-next-line no-lone-blocks
                        {if (route.path.includes('/admin')) {
                            Layout = Admin;
                        } else {
                            Layout = DefaultLayout;
                        }}
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
