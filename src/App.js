import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GalleryProvider from 'contexts/GalleryContext'
import GalleryPage from 'pages/GalleryPage/GalleryPage'
import DetailsPage from 'pages/DetailsPage/DetailsPage'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GalleryProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={GalleryPage} />
            <Route path='/image/:id' component={DetailsPage} />
          </Switch>
        </Router>
      </GalleryProvider>
    </QueryClientProvider>
  )
}

export default App
