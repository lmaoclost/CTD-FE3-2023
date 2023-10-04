import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home';
import { UserDetails } from '../pages/UserDetails';
import { Repository } from '../pages/Repository';
import { NotFound } from '../pages/NotFound';
import { RotaProtegida } from '../components/RotaProtegida';
import { GithubContextProvider } from '../contexts/GithubContext';
import { AuthContextProvider } from '../contexts/AuthContext';

export function RouteList() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <GithubContextProvider>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
              <Route path=":repositoryOwner" element={
                <RotaProtegida>
                  <UserDetails />
                </RotaProtegida >
              } />
              <Route path=":repositoryOwner/:repositoryName" element={<Repository />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </GithubContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  )
}