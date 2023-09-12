import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home';
import { Repository } from '../pages/Repository';
import { NotFound } from '../pages/NotFound';

export function RouteList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path=":repositoryOwner/:repositoryName" element={<Repository />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
