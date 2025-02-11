import Home from "./pages/Home"
import Indicators from "./pages/Indicators"
import Login from "./pages/Login"
import Collaborators from "./pages/Collaborators"
import Profile from "./pages/Profile"
import NewIndicator from "./pages/NewIndicator"
import IndicatorPage from "./pages/IndicatorPage"
import NewCollaborator from "./pages/NewCollaborator"
import Collaborator from "./pages/Collaborator"
import { Route, Routes } from "react-router-dom"
import { VfoodsProvider } from "./contexts/VfoodsContext"
import { IndicatorProvider } from "./contexts/IndicatorContext"
import { CollaboratorProvider } from "./contexts/ColaboratorContext"

function App() {
  

    return (
        <>
            <VfoodsProvider>
            <IndicatorProvider>
            <CollaboratorProvider>
                <Routes>
                
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/indicators" element={<Indicators/>}/>
                    <Route path="/new_indicator" element={<NewIndicator/>}/>
                    <Route path="/indicators/:id"  element={<IndicatorPage/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/new_collaborator" element={<NewCollaborator/>}/>
                    <Route path="/profile/pdf"/>
                    <Route path="/collaborators" element={<Collaborators/>}/>
                    <Route path="/collaborators/:id" element={<Collaborator/>}/>
                    <Route path="/collabotarors/:id/pdf"/>

                </Routes>
            </CollaboratorProvider>
            </IndicatorProvider>
            </VfoodsProvider>
            
            
        </>


    )
}

export default App
