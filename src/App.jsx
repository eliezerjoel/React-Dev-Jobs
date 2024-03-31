import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { useState } from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import JobPage, { jobLoader } from './pages/JobPage'
import AddJob from './pages/AddJob'
import NotFoundPage from './pages/NotFoundPage'


const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />}/>
    <Route path='/jobs' element={<JobsPage />} />
    <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader}/>
    <Route path='/add-job' element={<AddJob />} />
    <Route path='*' element={<NotFoundPage/>} />
  </Route>)
)

function App() {
  const [count, setCount] = useState(0)

  return <RouterProvider router={router}/>
}

export default App
