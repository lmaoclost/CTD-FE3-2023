import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';

export function RouteList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}