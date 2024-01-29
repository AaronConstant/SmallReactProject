import Header from './Header.jsx'; //importing our components to give our function access to display them. 
import Card from './Card.jsx'
import Products from './Products.jsx';
import Footer from './Footer.jsx';
import Button from './Button.jsx'
function App() {
//since we can only return one component at a time we will have to contain it within a fragment which are indicated as <></>
  return( 
  <> 
    <Header/>
    <Card/>
    <Button />
    <Products/>
    <Footer/>
     </>
  );
}
// you can have have multiple of the same components if necessary depending on the project that requires it aka anything within the fragment brackets in the return statement. 
//rearrange when necessary to reorganize for visual purposes. 
// react is about reusing components 

export default App
