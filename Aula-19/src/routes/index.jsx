import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home';
import { UserDetails } from '../pages/UserDetails';
import { Repository } from '../pages/Repository';
import { NotFound } from '../pages/NotFound';
import { GithubContextProvider } from '../contexts/GithubContext';

export function RouteList() {
  return (
    <BrowserRouter>
      <GithubContextProvider>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path=":repositoryOwner" element={<UserDetails />} />
            <Route path=":repositoryOwner/:repositoryName" element={<Repository />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </GithubContextProvider>
    </BrowserRouter>
  )
}